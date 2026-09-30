import { useEffect } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { useApp } from '../components/AppState.jsx';
import { CHAPTERS, SPECIES, TOOLS, SOLAR_TECH, FARMING_SYSTEMS, GLOSSARY, DISEASES, DECISION_PATHS, CASE_STUDIES } from '../data/jal.js';
import { PageHead } from './Layout.jsx';
import { SYS_TO_CH } from './media.jsx';
import { ChapterCard } from './Explore.jsx';
import { StoryCard } from './Home.jsx';
import { SolarTechCard } from './Tools.jsx';

/* ---------- Saved ---------- */
export function Saved() {
  const { saved } = useApp();
  const items = saved
    .map((s) => {
      let item = null, to = '/explore';
      if (s.type === 'chapter') { item = CHAPTERS.find((c) => c.id === s.id); to = `/chapter/${s.id}`; }
      else if (s.type === 'species') { item = SPECIES.find((c) => c.id === s.id); to = `/species/${s.id}`; }
      else if (s.type === 'tool') { item = TOOLS.find((c) => c.id === s.id); to = `/tools/${s.id}`; }
      else if (s.type === 'solar') { item = SOLAR_TECH.find((c) => c.id === s.id); to = `/solar/${s.id}`; }
      if (!item) return null;
      return { ...s, to, title: item.title || item.name || item.common || s.id, desc: item.summary || item.desc || item.problem || '' };
    })
    .filter(Boolean);
  return (
    <>
      <PageHead back="Back to Home" eyebrow="Saved Items" title="Your Saved Resources" lede={items.length ? `${items.length} items saved.` : undefined} />
      <section className="section">
        <div className="wrap">
          {!items.length ? (
            <div className="empty">No saved items yet. Bookmark chapters, species, and tools to access them quickly.</div>
          ) : (
            <div className="grid cols-3">
              {items.map((it) => (
                <Link key={it.id} className="card" to={it.to}>
                  <div className="body">
                    <span className="tag t-records">{it.type}</span>
                    <h3>{it.title}</h3>
                    <p className="desc">{it.desc.substring(0, 80)}…</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ---------- Search ---------- */
function runSearch(query) {
  const q = query.toLowerCase();
  const r = [];
  CHAPTERS.forEach((c) => {
    if (c.title.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q)) r.push({ type: 'chapter', id: c.id, title: c.title, desc: c.summary, icon: c.icon });
  });
  SPECIES.forEach((s) => {
    if (s.common.toLowerCase().includes(q) || s.scientific.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)) r.push({ type: 'species', id: s.id, title: s.common, desc: s.scientific + ' — ' + s.desc.substring(0, 80), icon: '🐟' });
  });
  FARMING_SYSTEMS.forEach((s) => {
    if (s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q)) r.push({ type: 'system', id: s.id, title: s.name, desc: s.desc.substring(0, 100), icon: s.icon });
  });
  SOLAR_TECH.forEach((t) => {
    if (t.name.toLowerCase().includes(q) || t.problem.toLowerCase().includes(q)) r.push({ type: 'solar', id: t.id, title: t.name, desc: t.problem.substring(0, 100), icon: '☀' });
  });
  GLOSSARY.forEach((g) => {
    if (g.term.toLowerCase().includes(q) || g.def.toLowerCase().includes(q)) r.push({ type: 'glossary', id: g.term, title: g.term, desc: g.def.substring(0, 100), icon: '📖' });
  });
  DISEASES.forEach((d) => {
    if (d.name.toLowerCase().includes(q) || d.agent.toLowerCase().includes(q)) r.push({ type: 'disease', id: d.name, title: d.name, desc: d.agent + ' — ' + d.symptoms[0], icon: '🔬', disease: d });
  });
  return r;
}

export function Search() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { openModal } = useApp();
  const q = params.get('q') || '';
  const results = q.length >= 2 ? runSearch(q) : [];

  const open = (r) => {
    if (r.type === 'chapter') navigate(`/chapter/${r.id}`);
    else if (r.type === 'species') navigate(`/species/${r.id}`);
    else if (r.type === 'solar') navigate(`/solar/${r.id}`);
    else if (r.type === 'system') navigate(`/chapter/${SYS_TO_CH[r.id] || 'ch1'}`);
    else if (r.type === 'glossary') navigate('/glossary');
    else if (r.type === 'disease') {
      const d = r.disease;
      openModal(
        <>
          <h3>{d.name}</h3>
          <p className="muted" style={{ fontStyle: 'italic', marginBottom: 14 }}>{d.agent}</p>
          <div className="stack">
            <div className="callout warn"><b>Symptoms</b>{d.symptoms.join(' · ')}</div>
            <div className="callout tip"><b>Treatment</b>{d.treatment}</div>
            <p className="muted" style={{ fontSize: '.84rem' }}><strong>Source:</strong> Page {d.sourcePage} of the Fisheries Handbook.</p>
          </div>
        </>
      );
    } else navigate('/explore');
  };

  return (
    <>
      <PageHead back="Back to Home" eyebrow={`Search Results for “${q}”`} title={`${results.length} Results Found`} />
      <section className="section">
        <div className="wrap stack" style={{ maxWidth: 860, marginInline: 'auto' }}>
          {results.length ? (
            results.map((r) => (
              <button key={r.type + r.id} className="result-item" onClick={() => open(r)}>
                <h4><Icon name={r.icon} size={17} /> {r.title}</h4>
                <p>{r.desc}</p>
                <span className="chip">{r.type}</span>
              </button>
            ))
          ) : (
            <div className="empty">No results found. Try different keywords.</div>
          )}
        </div>
      </section>
    </>
  );
}

/* ---------- Decision ---------- */
export function Decision() {
  const { openModal } = useApp();
  const start = (p) =>
    openModal(
      <>
        <h3 style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name={p.icon} size={22} /> {p.title}</h3>
        <p className="muted" style={{ marginBottom: 16 }}>{p.desc}</p>
        <div className="callout"><b>Questions to think about</b>
          <ul style={{ margin: '4px 0 0', paddingLeft: 18 }}>{p.questions.map((q) => <li key={q}>{q}</li>)}</ul>
        </div>
        <div className="callout tip" style={{ marginTop: 12 }}><b>Recommended Chapters</b>Based on your selection, these handbook sections are most relevant:</div>
        <div className="grid cols-2" style={{ marginTop: 12 }}>
          {p.sections.map((cid) => {
            const ch = CHAPTERS.find((c) => c.id === cid);
            return ch ? <ChapterCard key={cid} ch={ch} /> : null;
          })}
        </div>
        <p className="muted" style={{ marginTop: 14, fontSize: '.84rem' }}><strong>Note:</strong> These are suggested starting points. Consult qualified fisheries professionals for specific technical advice.</p>
      </>
    );
  return (
    <>
      <PageHead variant="dark" back="Back to Home" eyebrow="Decision Pathways" title="Help Me Make a Decision" lede="Tell us what you need — we'll guide you to the right handbook sections." />
      <section className="section">
        <div className="wrap link-grid">
          {DECISION_PATHS.map((p) => (
            <button key={p.id} className="link-row" onClick={() => start(p)}>
              <span className="lr-ic"><Icon name={p.icon} size={19} /></span>
              <span>{p.title}<span style={{ display: 'block', fontWeight: 400, fontSize: '.82rem', color: 'var(--ink-soft)' }}>{p.desc}</span></span>
              <Icon name="arrow" size={16} className="arrow" />
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

/* ---------- Solar ---------- */
export function Solar() {
  return (
    <>
      <PageHead variant="solar" back="Back to Home" eyebrow="Solar Solutions Library" title="Power Your Farm with Solar" lede="Field-tested solar technologies with documented ROI, impact data, and implementation details from Assam, Jharkhand, and Odisha." />
      <section className="section">
        <div className="wrap grid cols-3">
          {SOLAR_TECH.map((t) => <SolarTechCard key={t.id} t={t} />)}
        </div>
      </section>
    </>
  );
}

export function SolarDetail() {
  const { id } = useParams();
  const t = SOLAR_TECH.find((x) => x.id === id);
  if (!t) return <div className="wrap section"><div className="empty">Technology not found.</div></div>;
  const specs = Object.entries(t.specs || {});
  return (
    <>
      <PageHead variant="solar" back="Back to Solar Library" backTo="/solar" eyebrow="Solar Technology" title={t.name} lede={t.problem} />
      <section className="section">
        <div className="wrap stack" style={{ gap: 20 }}>
          <div className="grid cols-3">
            <div className="panel metric"><div className="v" style={{ color: 'var(--warn)' }}>{t.capex}</div><div className="l">Capital Cost</div></div>
            <div className="panel metric"><div className="v" style={{ color: 'var(--ok)' }}>{t.roi}</div><div className="l">ROI (years)</div></div>
            <div className="panel metric"><div className="v" style={{ color: 'var(--pond)' }}>{t.incomeIncrease}</div><div className="l">Income Increase</div></div>
          </div>
          <div className="grid cols-2">
            <div className="panel"><h3>Livelihood Problem</h3><p>{t.problem}</p></div>
            <div className="panel"><h3>Intervention</h3><p>{t.name}</p>
              {specs.length > 0 && (
                <div className="meta-row" style={{ paddingTop: 12 }}>{specs.map(([k, v]) => <span key={k} className="chip"><span className="mono">{k}</span> {v}</span>)}</div>
              )}
            </div>
          </div>
          <div className="panel"><h3>Documented Impact</h3><p>{t.impact}</p></div>
          <div className="grid cols-2">
            <div className="panel"><h3>Location</h3><p><Icon name="📍" size={15} /> {t.location}</p><p style={{ color: 'var(--ink-soft)', fontSize: '.88rem', marginTop: 4 }}>{t.geography}</p></div>
            <div className="panel"><h3>Limitations</h3>{t.limitations.map((l) => <div key={l} className="list-line risk"><Icon name="⚠" size={15} /> {l}</div>)}</div>
          </div>
          <div><span className={`flag${t.validationStatus === 'Field validated' ? '' : ' doc'}`}><Icon name={t.validationStatus === 'Field validated' ? '✅' : '⚠'} size={16} /> {t.validationStatus}</span></div>
          <div className="callout"><b>Source</b>Pages {t.sourcePages.join(', ')} of the Fisheries Handbook. All cost and impact data is sourced directly from field documentation.</div>
        </div>
      </section>
    </>
  );
}

/* ---------- Stories ---------- */
function StoryModal({ cs }) {
  return (
    <>
      <h3>{cs.location}</h3>
      <p className="muted" style={{ marginBottom: 16 }}>{cs.state}</p>
      <div className="stack">
        <div className="callout warn"><b>Problem</b>{cs.problem}</div>
        <div className="callout"><b>Intervention</b>{cs.intervention}</div>
        <div className="grid cols-2" style={{ gap: 12 }}>
          <div className="callout crit"><b>Before</b>{cs.before}</div>
          <div className="callout tip"><b>Result</b>{cs.after}</div>
        </div>
        <div className="grid cols-2 kv" style={{ gap: 12 }}>
          <div><b>Evidence</b>{cs.evidence}</div>
          <div><b>Technology</b>{cs.technology}</div>
        </div>
        <p className="muted" style={{ fontSize: '.84rem' }}><strong>Source:</strong> Pages {cs.sourcePages.join(', ')} of the Fisheries Handbook.</p>
      </div>
    </>
  );
}

export function Stories() {
  const [params, setParams] = useSearchParams();
  const { openModal } = useApp();
  const openId = params.get('open');
  useEffect(() => {
    const cs = CASE_STUDIES.find((c) => c.id === openId);
    if (cs) {
      openModal(<StoryModal cs={cs} />);
      setParams({}, { replace: true });
    }
  }, [openId]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <PageHead back="Back to Home" eyebrow="Stories from the Field" title="Real Farms, Real Results" lede="Implementation outcomes from Assam, Jharkhand, and Odisha. Problem → Intervention → Change." />
      <section className="section">
        <div className="wrap grid cols-3">
          {CASE_STUDIES.map((cs) => <StoryCard key={cs.id} cs={cs} />)}
        </div>
      </section>
    </>
  );
}

/* ---------- Glossary ---------- */
export function Glossary() {
  return (
    <>
      <PageHead back="Back to Home" eyebrow="Glossary & Resources" title="Technical Terms & References" lede="Simple definitions of key aquaculture terms used throughout the platform." />
      <section className="section">
        <div className="wrap">
          <dl className="gloss panel" style={{ margin: 0 }}>
            {GLOSSARY.map((g) => (
              <div key={g.term} style={{ display: 'contents' }}>
                <dt>{g.term}</dt>
                <dd>{g.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
