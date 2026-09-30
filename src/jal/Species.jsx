import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { SaveButton } from '../components/AppState.jsx';
import { SPECIES, FARMING_SYSTEMS } from '../data/jal.js';
import { PageHead } from './Layout.jsx';
import { SpeciesArt, SYS_TO_CH } from './media.jsx';
import { SpeciesCard } from './Home.jsx';

const CATS = ['all', 'IMC', 'Exotic', 'Non-Carp', 'High Value', 'SIS', 'Cold Water', 'Ornamental'];
const LANG = { hi: 'Hindi', bn: 'Bengali', od: 'Odia', as: 'Assamese', en: 'English' };

export default function Species() {
  const [cat, setCat] = useState('all');
  const list = cat === 'all' ? SPECIES : SPECIES.filter((s) => s.category === cat);
  return (
    <>
      <PageHead back="Back to Home" eyebrow="Species Explorer" title="Find Your Fish" lede="Filter by category, water temperature, and farming system." />
      <section className="section">
        <div className="wrap">
          <div className="pills" role="group" aria-label="Filter by category">
            {CATS.map((c) => (
              <button key={c} className={`pill${cat === c ? ' active' : ''}`} onClick={() => setCat(c)}>
                {c === 'all' ? 'All' : c}
                <span className="mono" style={{ opacity: 0.6 }}>{c === 'all' ? SPECIES.length : SPECIES.filter((s) => s.category === c).length}</span>
              </button>
            ))}
          </div>
          <div className="grid cols-3">
            {list.map((s) => <SpeciesCard key={s.id} sp={s} full />)}
          </div>
        </div>
      </section>
      <section className="section tight dim">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div>
              <div className="eyebrow">Compare</div>
              <h2>Species Comparison</h2>
              <p>Select up to 3 species to compare side by side.</p>
            </div>
            <Link className="btn btn-line btn-sm" to="/compare">Compare <Icon name="arrow" size={14} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function SpeciesDetail() {
  const { id } = useParams();
  const sp = SPECIES.find((s) => s.id === id);
  if (!sp) return <div className="wrap section"><div className="empty">Species not found.</div></div>;
  const systems = sp.systems.map((s) => FARMING_SYSTEMS.find((f) => f.id === s)).filter(Boolean);

  return (
    <>
      <div className="page-head">
        <div className="wrap">
          <Link className="back-link" to="/species"><Icon name="back" size={16} /> Back to Species</Link>
          <div className="sp-hero">
            <div className="photo"><SpeciesArt sp={sp} large /></div>
            <div>
              <div className="eyebrow">{sp.category}</div>
              <h1 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.7rem)', fontWeight: 800, marginTop: 8 }}>{sp.common}</h1>
              <p style={{ fontStyle: 'italic', color: 'var(--ink-soft)', fontSize: '1.05rem', margin: '4px 0 12px' }}>{sp.scientific}</p>
              <p style={{ color: 'var(--ink-soft)', maxWidth: '52ch' }}>{sp.desc}</p>
              <div className="meta-row" style={{ paddingTop: 16 }}>
                <span className="chip"><Icon name="🌡" size={14} /> {sp.temp}°C</span>
                <span className="chip"><Icon name="💧" size={14} /> {sp.water}</span>
                <span className="chip"><Icon name="🎯" size={14} /> {sp.purpose}</span>
                <SaveButton id={sp.id} type="species" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="grid cols-2" style={{ marginBottom: 28 }}>
            <div className="panel">
              <h3>Key Characteristics</h3>
              {sp.keyTraits.map((t) => <div key={t} className="list-line good"><Icon name="✓" size={16} /> {t}</div>)}
            </div>
            <div className="panel">
              <h3>Risks &amp; Considerations</h3>
              {sp.risks.map((r) => <div key={r} className="list-line risk"><Icon name="⚠" size={16} /> {r}</div>)}
            </div>
          </div>

          <h3 className="sub-head" style={{ marginTop: 0 }}>Local Names</h3>
          <div className="meta-row" style={{ marginBottom: 28, paddingTop: 0 }}>
            {Object.entries(sp.localNames).map(([k, v]) => (
              <span className="chip" key={k}><span className="mono" title={LANG[k]}>{k.toUpperCase()}</span> {v}</span>
            ))}
          </div>

          <h3 className="sub-head">Suitable Farming Systems</h3>
          <div className="link-grid">
            {systems.map((sys) => (
              <Link key={sys.id} className="link-row" to={`/chapter/${SYS_TO_CH[sys.id] || 'ch1'}`}>
                <span className="lr-ic"><Icon name={sys.icon} size={19} /></span>
                {sys.name}
                <Icon name="arrow" size={16} className="arrow" />
              </Link>
            ))}
          </div>

          <div className="callout" style={{ marginTop: 24 }}><b>Source</b>Pages {sp.sourcePages.join(', ')} of the Fisheries Handbook.</div>
        </div>
      </section>
    </>
  );
}
