import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import { usePersistent } from '../components/AppState.jsx';
import { DISEASE_DB, TYPE_COLORS } from '../data/handbook.js';
import { downloadCSV } from '../components/download.js';
import { SecHead } from './common.jsx';
import { InfoBox } from './Chapters.jsx';

const SYMPTOMS = [
  ['surfacing', 'Fish surfacing / gasping at surface'],
  ['spots', 'White or grey spots on body/fins'],
  ['ulcers', 'Ulcers or red lesions on skin'],
  ['finrot', 'Fins fraying, rotting or missing'],
  ['mucus', 'Excessive mucus / slimy body'],
  ['mortality', 'Rapid or sudden fish deaths'],
  ['bloating', 'Bloated abdomen / fluid in cavity'],
  ['rubbing', 'Fish rubbing against pond sides'],
  ['noeat', 'Refusal to eat / lethargy'],
  ['whirling', 'Whirling or erratic swimming'],
];

export function DiseaseChecker() {
  const [sel, setSel] = useState([]);
  const [result, setResult] = useState(null);
  const toggle = (s) => setSel(sel.includes(s) ? sel.filter((x) => x !== s) : [...sel, s]);
  const diagnose = () => {
    if (!sel.length) return setResult('none-selected');
    const scored = DISEASE_DB.filter((d) => d.sym.some((s) => sel.includes(s)))
      .map((d) => ({ ...d, score: d.sym.filter((s) => sel.includes(s)).length }))
      .sort((a, b) => b.score - a.score);
    setResult(scored.length ? scored : 'no-match');
  };
  return (
    <section className="hb-sec" id="diseases">
      <SecHead no="07" title="Disease Checker" desc="Identify what's wrong with your fish. Select the symptoms you observe and get possible diagnoses with treatments — based on the handbook's disease tables. Always consult a fish pathologist for severe outbreaks." />
      <div className="panel">
        <b style={{ fontSize: '.92rem' }}>Select all symptoms you are observing:</b>
        <div className="sym-grid">
          {SYMPTOMS.map(([k, l]) => (
            <label key={k} className={`sym${sel.includes(k) ? ' on' : ''}`}>
              <input type="checkbox" id={`sym-${k}`} checked={sel.includes(k)} onChange={() => toggle(k)} /> {l}
            </label>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="btn btn-pond" onClick={diagnose}><Icon name="🔬" size={16} /> Get Diagnosis</button>
          {sel.length > 0 && <button className="btn btn-line" onClick={() => { setSel([]); setResult(null); }}>Reset</button>}
        </div>

        {result === 'none-selected' && (
          <div style={{ marginTop: 16 }}><InfoBox kind="warn" icon="⚠" title="No symptoms selected">Please select at least one symptom.</InfoBox></div>
        )}
        {result === 'no-match' && (
          <div style={{ marginTop: 16 }}><InfoBox kind="alert" icon="⚠" title="No match">Consult a fish pathologist immediately. Isolate affected fish.</InfoBox></div>
        )}
        {Array.isArray(result) && (
          <div className="dx">
            <div className="dx-head">{result.length} possible condition{result.length > 1 ? 's' : ''} found</div>
            <div className="dx-body">
              {result.map((d) => (
                <div className="dx-item" key={d.name}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <span className="nm">{d.name}</span>
                    <span className="type-pill" style={{ background: TYPE_COLORS[d.type] + '22', color: TYPE_COLORS[d.type] }}>{d.type}</span>
                    <span className="score">{d.score}/{d.sym.length} symptoms match</span>
                  </div>
                  <div className="cause">{d.cause}</div>
                  <div className="tx"><strong>Treatment:</strong> {d.tx}</div>
                </div>
              ))}
              <div style={{ marginTop: 16 }}>
                <InfoBox kind="alert" icon="⚠" title="Always consult a fish pathologist for severe outbreaks">This is a first-aid guide. For mass mortality, contact your state fisheries department or ICAR-CIFA immediately.</InfoBox>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const inr = (n) => 'Rs ' + Math.round(n).toLocaleString('en-IN');
const SPECIES_OPTS = ['Rohu', 'Catla', 'Mrigal', 'Common Carp', 'GIFT Tilapia', 'Pangasius', 'Magur', 'Murrel', 'Other'];

export function RecordKeeper() {
  const [records, setRecords] = usePersistent('fish-recs', []);
  const [f, setF] = useState({ pond: '', date: new Date().toISOString().split('T')[0], qty: '', price: '', exp: '', sp: 'Rohu' });
  const [confirmClear, setConfirmClear] = useState(false);
  const [msg, setMsg] = useState('');
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const add = (e) => {
    e.preventDefault();
    const r = { date: f.date, pond: f.pond || '-', qty: parseFloat(f.qty) || 0, price: parseFloat(f.price) || 0, exp: parseFloat(f.exp) || 0, sp: f.sp };
    r.rev = r.qty * r.price;
    r.profit = r.rev - r.exp;
    setRecords([...records, r]);
    setF({ ...f, pond: '', qty: '', price: '', exp: '' });
    setMsg('');
  };
  const exportCSV = () => {
    if (!records.length) return setMsg('No records to export yet.');
    const h = 'Date,Pond,Species,Qty,Price,Revenue,Expenses,Profit\n';
    downloadCSV('farm-records.csv', h + records.map((r) => `${r.date},${r.pond},${r.sp},${r.qty},${r.price},${r.rev},${r.exp},${r.profit}`).join('\n'));
  };
  const tR = records.reduce((s, r) => s + r.rev, 0);
  const tE = records.reduce((s, r) => s + r.exp, 0);
  const tP = records.reduce((s, r) => s + r.profit, 0);

  return (
    <section className="hb-sec" id="records">
      <SecHead no="10" title="Farm Record Keeper" desc="Track your farm's performance. Log harvests, revenue, and expenses — all saved locally in your browser. Export to CSV anytime for accounting or government scheme applications." />
      <form className="panel" onSubmit={add}>
        <div className="field-row">
          <div className="field"><label htmlFor="r-pond">Pond / Tank No.</label><input id="r-pond" type="text" placeholder="e.g. P1" value={f.pond} onChange={set('pond')} /></div>
          <div className="field"><label htmlFor="r-date">Date</label><input id="r-date" type="date" value={f.date} onChange={set('date')} /></div>
          <div className="field"><label htmlFor="r-qty">Harvest Quantity (kg)</label><input id="r-qty" type="number" min="0" step="any" placeholder="0" value={f.qty} onChange={set('qty')} /></div>
          <div className="field"><label htmlFor="r-price">Selling Price (Rs/kg)</label><input id="r-price" type="number" min="0" step="any" placeholder="0" value={f.price} onChange={set('price')} /></div>
          <div className="field"><label htmlFor="r-expenses">Total Expenses (Rs)</label><input id="r-expenses" type="number" min="0" step="any" placeholder="0" value={f.exp} onChange={set('exp')} /></div>
          <div className="field"><label htmlFor="r-species">Species</label>
            <select id="r-species" value={f.sp} onChange={set('sp')}>{SPECIES_OPTS.map((s) => <option key={s}>{s}</option>)}</select>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
          <button className="btn btn-pond" type="submit"><Icon name="plus" size={16} /> Add Record</button>
          <button className="btn btn-line" type="button" onClick={exportCSV}><Icon name="📥" size={16} /> Export CSV</button>
          {!confirmClear ? (
            <button className="btn btn-danger" type="button" onClick={() => records.length && setConfirmClear(true)}><Icon name="🗑" size={16} /> Clear All</button>
          ) : (
            <>
              <span style={{ color: 'var(--crit)', fontWeight: 600, fontSize: '.88rem' }}>Clear all records?</span>
              <button className="btn btn-danger btn-sm" type="button" onClick={() => { setRecords([]); setConfirmClear(false); }}>Yes, clear</button>
              <button className="btn btn-line btn-sm" type="button" onClick={() => setConfirmClear(false)}>Cancel</button>
            </>
          )}
          {msg && <span style={{ color: 'var(--ink-soft)', fontSize: '.88rem' }}>{msg}</span>}
        </div>

        <div className="table-wrap" style={{ marginTop: 22 }}>
          <table className="data">
            <thead><tr><th>Date</th><th>Pond</th><th>Species</th><th>Qty (kg)</th><th>Price (Rs/kg)</th><th>Revenue (Rs)</th><th>Expenses (Rs)</th><th>Profit (Rs)</th></tr></thead>
            <tbody>
              {records.length ? records.map((r, i) => (
                <tr key={i}>
                  <td>{r.date}</td><td>{r.pond}</td><td>{r.sp}</td><td>{r.qty}</td><td>Rs {r.price}</td>
                  <td>Rs {r.rev.toLocaleString('en-IN')}</td><td>Rs {r.exp.toLocaleString('en-IN')}</td>
                  <td className={r.profit >= 0 ? 'pos' : 'neg'}>Rs {r.profit.toLocaleString('en-IN')}</td>
                </tr>
              )) : (
                <tr><td colSpan={8} style={{ textAlign: 'center', color: 'var(--ink-soft)', padding: 24 }}>No records yet. Add your first harvest above.</td></tr>
              )}
            </tbody>
          </table>
        </div>
        {records.length > 0 && (
          <div className="summary">
            <div><div className="l">Total Revenue</div><div className="v">{inr(tR)}</div></div>
            <div><div className="l">Total Expenses</div><div className="v" style={{ color: 'var(--marigold)' }}>{inr(tE)}</div></div>
            <div><div className="l">Total Profit</div><div className="v" style={{ color: '#8fe0ad' }}>{inr(tP)}</div></div>
          </div>
        )}
      </form>
    </section>
  );
}

const YIELD = { pond: { rohu: 3000, tilapia: 4500, pangasius: 4000, magur: 2500 }, cage: { rohu: 12000, tilapia: 18000, pangasius: 14000, magur: 8000 }, biofloc: { rohu: 8000, tilapia: 12000, pangasius: 10000, magur: 6000 }, ras: { rohu: 30000, tilapia: 40000, pangasius: 35000, magur: 20000 } };
const COST_R = { pond: 0.55, cage: 0.6, biofloc: 0.65, ras: 0.7 };
const SOLAR_R = { pond: 0.25, cage: 0.2, biofloc: 0.3, ras: 0.28 };

export function ProfitCalculator() {
  const [f, setF] = useState({ area: 0.5, system: 'pond', species: 'rohu', months: 6, price: 120, solar: 'yes' });
  const [out, setOut] = useState(null);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const calculate = (e) => {
    e.preventDefault();
    const area = parseFloat(f.area) || 0.5;
    const mo = parseFloat(f.months) || 6;
    const price = parseFloat(f.price) || 120;
    const prod = (YIELD[f.system][f.species] || 3000) * area * (mo / 12);
    const rev = prod * price;
    const bc = rev * COST_R[f.system];
    const ss = f.solar === 'yes' ? bc * SOLAR_R[f.system] : 0;
    const fc = bc - ss;
    setOut({ prod, rev, fc, ss, profit: rev - fc, solar: f.solar === 'yes' });
  };
  return (
    <section className="hb-sec" id="calculator">
      <SecHead no="11" title="Farm Profitability Calculator" desc="Plan before you invest. Estimate expected yield, revenue, costs, and energy savings based on real pilot data from Assam, Jharkhand, and Odisha — across pond, cage, biofloc, and RAS systems." />
      <div className="calc-layout">
        <form className="panel" onSubmit={calculate}>
          <div className="field-row" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))' }}>
            <div className="field"><label htmlFor="c-area">Pond Area (ha)</label><input id="c-area" type="number" min="0.1" step="0.1" value={f.area} onChange={set('area')} /></div>
            <div className="field"><label htmlFor="c-system">Farming System</label>
              <select id="c-system" value={f.system} onChange={set('system')}>
                <option value="pond">Pond Farming</option><option value="cage">Cage Culture</option><option value="biofloc">Biofloc (BFT)</option><option value="ras">RAS</option>
              </select>
            </div>
            <div className="field"><label htmlFor="c-species">Primary Species</label>
              <select id="c-species" value={f.species} onChange={set('species')}>
                <option value="rohu">Rohu / Catla (IMC)</option><option value="tilapia">GIFT Tilapia</option><option value="pangasius">Pangasius</option><option value="magur">Magur / Murrel</option>
              </select>
            </div>
            <div className="field"><label htmlFor="c-months">Culture Period (months)</label><input id="c-months" type="number" min="3" max="18" value={f.months} onChange={set('months')} /></div>
            <div className="field"><label htmlFor="c-price">Selling Price (Rs/kg)</label><input id="c-price" type="number" min="20" value={f.price} onChange={set('price')} /></div>
            <div className="field"><label htmlFor="c-solar">Solar System?</label>
              <select id="c-solar" value={f.solar} onChange={set('solar')}>
                <option value="yes">Yes — Climate Resilient</option><option value="no">No — Grid / Diesel</option>
              </select>
            </div>
          </div>
          <button className="btn btn-solar" type="submit"><Icon name="calc" size={16} /> Calculate Expected Profit</button>
        </form>

        <div className="calc-out" aria-live="polite">
          <h3><Icon name="chart" size={18} /> Estimated Results</h3>
          {!out ? (
            <p className="pending">Fill in your farm details and press <strong>Calculate Expected Profit</strong> to see production, revenue, costs and solar savings.</p>
          ) : (
            <>
              <div className="calc-line"><span>Expected Production</span><span className="v">{Math.round(out.prod).toLocaleString('en-IN')} kg</span></div>
              <div className="calc-line"><span>Gross Revenue</span><span className="v">{inr(out.rev)}</span></div>
              <div className="calc-line"><span>Operating Costs</span><span className="v">{inr(out.fc)}</span></div>
              <div className="calc-line"><span>Energy Savings</span><span className="v" style={{ color: '#8fe0ad' }}>{out.solar ? inr(out.ss) + ' saved' : 'Not applicable'}</span></div>
              <div className="calc-line total"><span style={{ fontWeight: 700 }}>Net Profit (Estimated)</span><span className="v">{inr(out.profit)}</span></div>
            </>
          )}
          <p className="fine">Estimates based on handbook pilot data. Actual results vary by local conditions, management, and market prices.</p>
        </div>
      </div>
    </section>
  );
}
