import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { useApp, usePersistent } from '../components/AppState.jsx';
import { TOOLS, WATER_QUALITY, FEED_TABLE, SOLAR_TECH, FARMING_SYSTEMS } from '../data/jal.js';
import { PageHead } from './Layout.jsx';

export default function Tools() {
  return (
    <>
      <PageHead back="Back to Home" eyebrow="Practical Tools" title="Field-Ready Calculators" lede="Interactive tools based on handbook specifications. All formulas sourced from the handbook." />
      <section className="section">
        <div className="wrap grid cols-3">
          {TOOLS.map((t) => (
            <Link key={t.id} className="card" to={`/tools/${t.id}`}>
              <div className="body" style={{ padding: 24, gap: 8 }}>
                <span className="lr-ic" style={{ width: 46, height: 46, borderRadius: 12, background: 'var(--pond-soft)', color: 'var(--pond)', display: 'grid', placeItems: 'center', marginBottom: 8 }}>
                  <Icon name={t.icon} size={22} />
                </span>
                <h3>{t.name}</h3>
                <p className="desc">{t.desc}</p>
                {t.chapter && <div className="meta-row"><span className="chip page">Ch {t.chapter.replace('ch', '')}</span></div>}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export function ToolDetail() {
  const { id } = useParams();
  switch (id) {
    case 'water_quality': return <WaterQuality />;
    case 'stocking_calc': return <StockingCalc />;
    case 'feed_calc': return <FeedCalc />;
    case 'solar_matcher': return <SolarMatcher />;
    case 'pond_checklist': return <PondChecklist />;
    case 'species_filter': return <Navigate to="/species" replace />;
    case 'system_compare': return <SystemCompare />;
    default: return <WaterQuality />;
  }
}

const Field = ({ id, label, children }) => (
  <div className="field"><label htmlFor={id}>{label}</label>{children}</div>
);

/* ---------- Water quality ---------- */
const STATUS = {
  normal: ['Normal', 'var(--ok)', 'var(--ok-soft)'],
  caution: ['Caution', 'var(--warn)', 'var(--warn-soft)'],
  critical: ['Critical', 'var(--crit)', 'var(--crit-soft)'],
};

function WaterQuality() {
  const { openModal } = useApp();
  const [readings, setReadings] = useState({});
  const detail = (wq) =>
    openModal(
      <>
        <h3>{wq.param}</h3>
        <div className="stack" style={{ marginTop: 12 }}>
          <div className="callout"><b>Desirable Range</b>{wq.desirable} {wq.unit}</div>
          <div className="callout tip"><b>Acceptable Range</b>{wq.acceptable} {wq.unit}</div>
          <p className="muted">{wq.notes}</p>
          <p className="muted" style={{ fontSize: '.84rem' }}><strong>Source:</strong> Page {wq.sourcePage} of the Fisheries Handbook.</p>
        </div>
      </>
    );
  return (
    <>
      <PageHead back="Back to Tools" backTo="/tools" eyebrow="Water Quality Reference" title="Water Quality Parameters" lede="All values sourced from Chapter 12 of the Fisheries Handbook. Use normal/caution/critical indicators." />
      <section className="section">
        <div className="wrap stack" style={{ gap: 20 }}>
          <div className="panel">
            <h3>Quick Reference Table</h3>
            <p style={{ color: 'var(--ink-soft)', fontSize: '.88rem', marginBottom: 14 }}>Enter your own reading in the last column to see its status.</p>
            <div className="table-wrap">
              <table className="data">
                <thead><tr><th>Parameter</th><th>Unit</th><th>Desirable Range</th><th>Acceptable Range</th><th>Your reading</th><th></th></tr></thead>
                <tbody>
                  {WATER_QUALITY.map((wq, i) => {
                    const raw = readings[i];
                    const st = raw !== undefined && raw !== '' && !isNaN(parseFloat(raw)) ? STATUS[wq.statusFn(parseFloat(raw))] : null;
                    return (
                      <tr key={wq.param}>
                        <td><b>{wq.param}</b></td>
                        <td className="mono">{wq.unit || '—'}</td>
                        <td>{wq.desirable}</td>
                        <td>{wq.acceptable}</td>
                        <td style={{ minWidth: 170 }}>
                          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                            <input id={`wq-${i}`} type="number" step="any" aria-label={`${wq.param} reading`} value={raw ?? ''} onChange={(e) => setReadings({ ...readings, [i]: e.target.value })}
                              style={{ width: 80, padding: '6px 8px', borderRadius: 8, border: '1px solid var(--line)', background: 'var(--paper)', color: 'var(--ink)', font: 'inherit' }} />
                            {st && <span className="chip" style={{ background: st[2], color: st[1], fontWeight: 700 }}>{st[0]}</span>}
                          </div>
                        </td>
                        <td><button className="btn btn-line btn-sm" onClick={() => detail(wq)}>Details</button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="callout warn"><b>Important</b>These values represent ranges explicitly supported by the handbook. Always verify against local conditions and consult qualified fisheries professionals for specific situations.</div>
        </div>
      </section>
    </>
  );
}

/* ---------- Stocking ---------- */
function StockingCalc() {
  const [area, setArea] = useState(1000);
  const [intensity, setIntensity] = useState('medium');
  const [species, setSpecies] = useState('mixed');
  const [survival, setSurvival] = useState(60);
  const perM2 = { low: 0.5, medium: 0.9, high: 2.0 };
  const tPerHa = { low: 4, medium: 7, high: 12 };
  const a = parseFloat(area) || 0;
  const total = Math.round(a * perM2[intensity]);
  const yieldT = Math.round(((a * tPerHa[intensity]) / 10000) * 100) / 100;
  const survivors = Math.round(total * ((parseFloat(survival) || 0) / 100));
  return (
    <>
      <PageHead back="Back to Tools" backTo="/tools" eyebrow="Stocking Density Calculator" title="Stocking Density Calculator" lede="Calculate recommended stocking density based on your pond area and farming intensity." />
      <section className="section">
        <div className="wrap panel">
          <div className="field-row">
            <Field id="calcArea" label="Pond Area (m²)"><input id="calcArea" type="number" value={area} onChange={(e) => setArea(e.target.value)} /></Field>
            <Field id="calcIntensity" label="Farming Intensity">
              <select id="calcIntensity" value={intensity} onChange={(e) => setIntensity(e.target.value)}>
                <option value="low">Low (3-5 t/ha/yr)</option>
                <option value="medium">Medium (6-8 t/ha/yr)</option>
                <option value="high">High (10-15 t/ha/yr)</option>
              </select>
            </Field>
            <Field id="calcSpecies" label="Species">
              <select id="calcSpecies" value={species} onChange={(e) => setSpecies(e.target.value)}>
                <option value="mixed">Mixed Carps (Catla+Rohu+Mrigal)</option>
                <option value="rohu">Rohu only</option>
                <option value="catla">Catla only</option>
                <option value="tilapia">Tilapia</option>
                <option value="pangasius">Pangasius</option>
              </select>
            </Field>
            <Field id="calcSurvival" label="Expected Survival (%)"><input id="calcSurvival" type="number" value={survival} onChange={(e) => setSurvival(e.target.value)} /></Field>
          </div>
          <div className="result">
            <div className="result-grid">
              <div><div className="big">{total.toLocaleString()}</div><div className="lbl">Total fingerlings needed</div></div>
              <div><div className="big">{yieldT} t</div><div className="lbl">Expected yield/yr</div></div>
              <div><div className="big">{survivors.toLocaleString()}</div><div className="lbl">Expected survivors</div></div>
            </div>
          </div>
          <div className="callout" style={{ marginTop: 16 }}><b>Source</b>Densities from Chapter 5 (pages 26-30) of the Fisheries Handbook. Low: 5,000/ha, Medium: 8,000-10,000/ha, High: 15,000-25,000/ha.</div>
        </div>
      </section>
    </>
  );
}

/* ---------- Feed ---------- */
function FeedCalc() {
  const [init, setInit] = useState(100);
  const [fin, setFin] = useState(500);
  const [used, setUsed] = useState(800);
  const [price, setPrice] = useState(45);
  const i = parseFloat(init) || 0, f = parseFloat(fin) || 0, u = parseFloat(used) || 0, p = parseFloat(price) || 0;
  const gain = f - i;
  const fcr = u > 0 && gain !== 0 ? (u / gain).toFixed(2) : '—';
  const cost = Math.round(u * p);
  const perKg = gain > 0 ? Math.round(cost / gain) : 0;
  const n = parseFloat(fcr);
  const status = n <= 1.5 ? 'Excellent' : n <= 2 ? 'Good' : n <= 2.5 ? 'Average' : 'Poor';
  return (
    <>
      <PageHead back="Back to Tools" backTo="/tools" eyebrow="Feed & FCR Calculator" title="Feed & FCR Calculator" lede="Calculate feed requirements and feed conversion ratio. Feed costs 50-70% of total production." />
      <section className="section">
        <div className="wrap panel">
          <div className="field-row">
            <Field id="feedInitial" label="Initial Biomass (kg)"><input id="feedInitial" type="number" value={init} onChange={(e) => setInit(e.target.value)} /></Field>
            <Field id="feedFinal" label="Final Biomass (kg)"><input id="feedFinal" type="number" value={fin} onChange={(e) => setFin(e.target.value)} /></Field>
            <Field id="feedUsed" label="Total Feed Used (kg)"><input id="feedUsed" type="number" value={used} onChange={(e) => setUsed(e.target.value)} /></Field>
            <Field id="feedPrice" label="Feed Price (₹/kg)"><input id="feedPrice" type="number" value={price} onChange={(e) => setPrice(e.target.value)} /></Field>
          </div>
          <div className="result">
            <div className="result-grid">
              <div><div className="big">{fcr}</div><div className="lbl">FCR ({isNaN(n) ? '—' : status})</div></div>
              <div><div className="big">{gain} kg</div><div className="lbl">Total weight gain</div></div>
              <div><div className="big">₹{cost.toLocaleString()}</div><div className="lbl">Total feed cost</div></div>
              <div><div className="big">₹{perKg}</div><div className="lbl">Cost per kg gain</div></div>
            </div>
            <p className="note">FCR = Total Feed ÷ Weight Gain. Lower FCR = better feed efficiency. Target: 1.2-1.8 for carps.</p>
          </div>
          <div className="callout" style={{ marginTop: 16 }}><b>Source</b>Feed tables from Chapter 11 (pages 56-59) of the Fisheries Handbook.</div>
        </div>
      </section>
      <section className="section tight" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h3 className="sub-head" style={{ marginTop: 0 }}>General Feeding Table for Carps</h3>
          <div className="table-wrap">
            <table className="data">
              <thead><tr><th>Fish Weight</th><th>Feed Size</th><th>Feed Type</th><th>Rate (%BW)</th><th>Protein %</th><th>Frequency</th></tr></thead>
              <tbody>
                {FEED_TABLE.map((r) => (
                  <tr key={r.weight}><td><b>{r.weight}</b></td><td>{r.size}</td><td>{r.type}</td><td>{r.rate}</td><td>{r.protein}</td><td>{r.freq}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Solar matcher ---------- */
const PROBLEMS = {
  'Unreliable aeration': ['sol_nursery', 'sol_jet', 'sol_paddlewheel'],
  'High pumping costs': ['sol_jet'],
  'Fish mortality during transport': ['sol_transport'],
  'Drying problems': ['sol_dryer'],
  'Feed processing costs': ['sol_feedmill'],
  'Cold-chain needs': ['sol_transport'],
  'Unreliable energy for biofloc/RAS': ['sol_biofloc', 'sol_ras'],
};

export function SolarTechCard({ t, compact }) {
  return (
    <Link className="card" to={`/solar/${t.id}`}>
      <div className="body" style={{ padding: 20 }}>
        {!compact && <span className="tag t-energy">Solar Technology</span>}
        <h3>{t.name}</h3>
        <p className="desc">{t.problem}</p>
        <div className="meta-row">
          <span className="chip"><Icon name="💰" size={13} /> {t.capex}</span>
          <span className="chip"><Icon name="📈" size={13} /> ROI: {t.roi}</span>
          {compact && <span className="chip"><Icon name="📍" size={13} /> {t.location}</span>}
        </div>
      </div>
    </Link>
  );
}

function SolarMatcher() {
  const [problem, setProblem] = useState(null);
  const techs = problem ? PROBLEMS[problem].map((id) => SOLAR_TECH.find((t) => t.id === id)).filter(Boolean) : [];
  return (
    <>
      <PageHead back="Back to Tools" backTo="/tools" eyebrow="Solar Solution Matcher" title="Find Your Solar Solution" lede="Select your energy challenge to find documented solar technologies." />
      <section className="section">
        <div className="wrap">
          <div className="pills">
            {Object.keys(PROBLEMS).map((p) => (
              <button key={p} className={`pill${problem === p ? ' active' : ''}`} onClick={() => setProblem(p)}>{p}</button>
            ))}
          </div>
          {!problem ? (
            <div className="empty">Select a problem above to see matching solar technologies.</div>
          ) : techs.length ? (
            <div className="grid cols-3">{techs.map((t) => <SolarTechCard key={t.id} t={t} compact />)}</div>
          ) : (
            <div className="empty">No matching solar technologies found for this problem.</div>
          )}
        </div>
      </section>
    </>
  );
}

/* ---------- Pond checklist ---------- */
const STEPS = [
  { id: 's1', label: 'Select pond site with proper elevation and soil type' },
  { id: 's2', label: 'Mark pond boundaries and measure dimensions' },
  { id: 's3', label: 'Excavate pond to recommended depth (1-2m)' },
  { id: 's4', label: 'Construct bunds with proper slope (1:1.5 clay, 1:2.5 other)' },
  { id: 's5', label: 'Install inlet and outlet pipes' },
  { id: 's6', label: 'If poor soil: install plastic lining (remove 10-20cm soil first)' },
  { id: 's7', label: 'Fill with water and check for leaks' },
  { id: 's8', label: 'Drain completely and dry for at least 15 days' },
  { id: 's9', label: 'Apply lime: 1000 kg/ha (agricultural lime for pH 5→7)' },
  { id: 's10', label: 'Apply cow dung manure: 0.5 kg/m³' },
  { id: 's11', label: 'Fill to 30cm depth, add inorganic fertilizer (40 kg/ha)' },
  { id: 's12', label: 'Wait 1-2 weeks for plankton bloom to develop' },
  { id: 's13', label: 'Check water quality: DO, pH, temperature' },
  { id: 's14', label: 'Remove predatory and weed fish if present' },
  { id: 's15', label: 'Gradually increase water depth to 100-150cm' },
  { id: 's16', label: 'Stock fingerlings at recommended density' },
];

function PondChecklist() {
  const [checklist, setChecklist] = usePersistent('jp_checklist', {});
  const done = STEPS.filter((s) => checklist[s.id]).length;
  const pct = Math.round((done / STEPS.length) * 100);
  return (
    <>
      <PageHead back="Back to Tools" backTo="/tools" eyebrow="Pond Preparation Checklist" title="Pond Preparation Checklist" lede="Step-by-step preparation guide from Chapter 3 of the Fisheries Handbook." />
      <section className="section">
        <div className="wrap panel">
          <div className="progress"><div style={{ width: pct + '%' }} /></div>
          <p style={{ color: 'var(--ink-soft)', fontSize: '.9rem', marginBottom: 8 }}>{done}/{STEPS.length} steps completed ({pct}%)</p>
          {STEPS.map((s, i) => (
            <div key={s.id} className={`check-item${checklist[s.id] ? ' done' : ''}`}>
              <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
              <input type="checkbox" id={s.id} checked={!!checklist[s.id]} onChange={() => setChecklist({ ...checklist, [s.id]: !checklist[s.id] })} />
              <label htmlFor={s.id} style={{ cursor: 'pointer' }}>{s.label}</label>
            </div>
          ))}
          <div className="callout" style={{ marginTop: 18 }}><b>Source</b>Chapter 3, pages 15-23 of the Fisheries Handbook. Pond dimensions, dosages, and preparation steps are taken directly from the handbook.</div>
        </div>
      </section>
    </>
  );
}

/* ---------- System compare ---------- */
const FIELDS = [
  { label: 'Suitable For', key: 'suitableFor' },
  { label: 'Land & Water', key: 'landWater' },
  { label: 'Energy', key: 'energy' },
  { label: 'Skill Level', key: 'skillLevel' },
  { label: 'Advantages', key: 'advantages', list: true },
  { label: 'Limitations', key: 'limitations', list: true },
  { label: 'Risks', key: 'risks', list: true },
  { label: 'Daily Tasks', key: 'dailyTasks', list: true },
  { label: 'Solar Opportunities', key: 'solarOpp' },
];

export function SystemCompare() {
  const [slots, setSlots] = useState([null, null, null]);
  const toggle = (id) => {
    const next = [...slots];
    const idx = next.indexOf(id);
    if (idx > -1) next[idx] = null;
    else {
      const empty = next.indexOf(null);
      if (empty > -1) next[empty] = id;
      else next[2] = id;
    }
    setSlots(next);
  };
  const selected = slots.filter(Boolean).map((id) => FARMING_SYSTEMS.find((s) => s.id === id)).filter(Boolean);
  return (
    <>
      <PageHead back="Back to Tools" backTo="/tools" eyebrow="System Comparison" title="Compare Farming Systems" lede="Select up to 3 systems to compare side by side." />
      <section className="section">
        <div className="wrap">
          <div className="pills">
            {FARMING_SYSTEMS.map((s) => (
              <button key={s.id} className={`pill${slots.includes(s.id) ? ' active' : ''}`} onClick={() => toggle(s.id)}>
                <Icon name={s.icon} size={15} /> {s.name}
              </button>
            ))}
          </div>
          {!selected.length ? (
            <div className="empty">Select systems above to compare.</div>
          ) : (
            <div className="table-wrap">
              <table className="data">
                <thead>
                  <tr><th>Feature</th>{selected.map((s) => <th key={s.id}><span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name={s.icon} size={15} /> {s.name}</span></th>)}</tr>
                </thead>
                <tbody>
                  {FIELDS.map((f) => (
                    <tr key={f.key}>
                      <td className="feature">{f.label}</td>
                      {selected.map((s) => (
                        <td key={s.id} style={{ minWidth: 220 }}>
                          {f.list && Array.isArray(s[f.key])
                            ? <ul style={{ margin: 0, paddingLeft: 16 }}>{s[f.key].map((v) => <li key={v}>{v}</li>)}</ul>
                            : s[f.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
