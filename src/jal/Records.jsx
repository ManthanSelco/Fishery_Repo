import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import { useApp, usePersistent } from '../components/AppState.jsx';
import { RECORD_TYPES } from '../data/jal.js';
import { PageHead } from './Layout.jsx';

const labelOf = (f) => f.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
const NUM_HINTS = ['quantity', 'cost', 'price', 'total', 'amount', 'count', 'area', 'depth', 'size', 'weight', 'biomass', 'do', 'ph', 'ammonia', 'nitrite', 'turbidity', 'hours'];
const typeOf = (f) => (f.includes('date') ? 'date' : NUM_HINTS.some((h) => f.includes(h)) ? 'number' : 'text');

export function downloadCSV(filename, text) {
  const blob = new Blob([text], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function Records() {
  const { toast } = useApp();
  const [records, setRecords] = usePersistent('jp_records', {});
  const [tab, setTab] = useState('pond_profile');
  const [form, setForm] = useState({});
  const [confirmClear, setConfirmClear] = useState(false);
  const rt = RECORD_TYPES.find((r) => r.id === tab);
  const data = records[rt.id] || [];

  const add = (e) => {
    e.preventDefault();
    const entry = {};
    let valid = true;
    rt.fields.forEach((f) => {
      entry[f] = form[f] || '';
      if (!entry[f]) valid = false;
    });
    if (!valid) return toast('Please fill all fields');
    setRecords({ ...records, [rt.id]: [...data, entry] });
    setForm({});
    toast('Record added!');
  };
  const del = (i) => {
    setRecords({ ...records, [rt.id]: data.filter((_, j) => j !== i) });
    toast('Record deleted');
  };
  const clear = () => {
    setRecords({ ...records, [rt.id]: [] });
    setConfirmClear(false);
    toast('Records cleared');
  };
  const exportCSV = () => {
    if (!data.length) return toast('No data to export');
    const csv = rt.fields.join(',') + '\n' + data.map((row) => rt.fields.map((f) => `"${row[f] || ''}"`).join(',')).join('\n');
    downloadCSV(rt.id + '_records.csv', csv);
    toast('CSV downloaded!');
  };

  return (
    <>
      <PageHead back="Back to Home" eyebrow="Farm Records" title="Record Keeping Dashboard" lede="Track your farm performance. Data saved locally in your browser." />
      <section className="section">
        <div className="wrap">
          <div className="pills" role="tablist">
            {RECORD_TYPES.map((r) => (
              <button key={r.id} role="tab" aria-selected={tab === r.id} className={`pill${tab === r.id ? ' active' : ''}`} onClick={() => { setTab(r.id); setForm({}); setConfirmClear(false); }}>
                {r.name}
                {(records[r.id] || []).length > 0 && <span className="mono" style={{ opacity: 0.7 }}>{records[r.id].length}</span>}
              </button>
            ))}
          </div>

          <form className="panel" style={{ marginBottom: 20 }} onSubmit={add}>
            <h3>Add New {rt.name}</h3>
            <div className="field-row">
              {rt.fields.map((f) => (
                <div className="field" key={f}>
                  <label htmlFor={`rec_${f}`}>{labelOf(f)}</label>
                  <input id={`rec_${f}`} type={typeOf(f)} step="any" placeholder={labelOf(f)} value={form[f] || ''} onChange={(e) => setForm({ ...form, [f]: e.target.value })} />
                </div>
              ))}
            </div>
            <button className="btn btn-pond" type="submit"><Icon name="plus" size={16} /> Add Record</button>
          </form>

          {data.length ? (
            <div className="panel">
              <div className="table-wrap">
                <table className="data">
                  <thead><tr>{rt.fields.map((f) => <th key={f}>{labelOf(f)}</th>)}<th /></tr></thead>
                  <tbody>
                    {data.map((row, i) => (
                      <tr key={i}>
                        {rt.fields.map((f) => <td key={f}>{row[f] || ''}</td>)}
                        <td><button className="icon-btn" style={{ width: 32, height: 32, color: 'var(--crit)' }} onClick={() => del(i)} aria-label="Delete record"><Icon name="✕" size={14} /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                <button className="btn btn-line btn-sm" onClick={exportCSV}><Icon name="📥" size={15} /> Export CSV</button>
                {!confirmClear ? (
                  <button className="btn btn-line btn-sm" onClick={() => setConfirmClear(true)}><Icon name="🗑" size={15} /> Clear All</button>
                ) : (
                  <>
                    <span style={{ fontSize: '.86rem', color: 'var(--crit)', fontWeight: 600 }}>Clear all {rt.name} records?</span>
                    <button className="btn btn-danger btn-sm" onClick={clear}>Yes, clear</button>
                    <button className="btn btn-line btn-sm" onClick={() => setConfirmClear(false)}>Cancel</button>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="empty">No records yet. Add your first entry above.</div>
          )}
        </div>
      </section>
    </>
  );
}
