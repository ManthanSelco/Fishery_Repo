import { Link, useNavigate } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { KEY_STATS, VALUE_CHAIN, FARMING_SYSTEMS, SPECIES, TOOLS, CASE_STUDIES, CHAPTERS } from '../data/jal.js';
import { SpeciesArt, IconArt, tagClass, SYS_TO_CH } from './media.jsx';
import { EventFeature } from './Event.jsx';

export function ValueChainStrip({ onStep }) {
  const Tag = onStep ? 'button' : 'div';
  return (
    <div className="chain-wrap">
      <div className="chain">
        {VALUE_CHAIN.map((c) => (
          <Tag key={c.step} className="chain-step" style={{ '--c': c.color, cursor: onStep ? 'pointer' : 'default' }} onClick={onStep}>
            <span className="n">STEP {String(c.step).padStart(2, '0')}</span>
            <h4><Icon name={c.icon} size={17} /> {c.name}</h4>
            <p>{c.desc}</p>
          </Tag>
        ))}
      </div>
    </div>
  );
}

export function SystemCard({ sys }) {
  return (
    <Link className="card" to={`/chapter/${SYS_TO_CH[sys.id] || 'ch1'}`}>
      <div className="thumb"><IconArt icon={sys.icon} color="#0e6b57" label={sys.name} /></div>
      <div className="body">
        <span className="tag t-production">Production System</span>
        <h3>{sys.name}</h3>
        <p className="desc">{sys.desc.substring(0, 80)}…</p>
        <div className="meta-row">
          <span className="chip">{sys.skillLevel}</span>
          <span className="chip"><Icon name="bolt" size={13} /> Energy: {sys.energy.split(' ')[0]}</span>
        </div>
      </div>
    </Link>
  );
}

export function SpeciesCard({ sp, full = false }) {
  return (
    <Link className="card" to={`/species/${sp.id}`}>
      <div className="thumb"><SpeciesArt sp={sp} /></div>
      <div className="body">
        <span className={`tag ${tagClass(sp.category)}`}>{sp.category}</span>
        <h3>{sp.common}</h3>
        <p className="sci">{sp.scientific}</p>
        {full && (
          <div className="meta-row">
            <span className="chip">{sp.water}</span>
            <span className="chip">{sp.temp}°C</span>
            <span className="chip">{sp.purpose}</span>
          </div>
        )}
      </div>
    </Link>
  );
}

export function StoryCard({ cs, to }) {
  return (
    <Link className="card" to={to || `/stories?open=${cs.id}`}>
      <div className="thumb"><IconArt icon="📍" color="#0a3a40" label={cs.location} /></div>
      <div className="body">
        <span className="tag t-energy">{to ? 'Field Story' : cs.state}</span>
        <h3>{cs.location}</h3>
        <p className="desc">{cs.problem.substring(0, 80)}…</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <div>
            <div className="eyebrow"><Icon name="🐟" size={14} /> Fisheries &amp; Aquaculture Field Platform</div>
            <h1>From seed to sale: practical pathways for <em>climate&#8209;resilient</em> aquaculture</h1>
            <p className="sub">A practical handbook and interactive platform for fish farmers, trainers, and livelihood teams across India.</p>
            <div className="hero-ctas">
              <Link className="btn btn-solar" to="/explore"><Icon name="🔄" size={16} /> Explore the Value Chain</Link>
              <Link className="btn btn-ghost-light" to="/decide"><Icon name="🎯" size={16} /> Help Me Decide</Link>
            </div>
            <div className="hero-stats">
              {KEY_STATS.map((s) => (
                <div className="stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                  <small>{s.source}</small>
                </div>
              ))}
            </div>
          </div>
          <aside className="snapshot" aria-label="Farm snapshot">
            <div className="snapshot-head"><span>Farm Snapshot</span><Icon name="📈" size={16} /></div>
            <div className="snapshot-item">
              <span className="dot" style={{ background: 'var(--pond-soft)', color: 'var(--pond)' }}><Icon name="🐟" size={20} /></span>
              <span><b>42 Species</b><span>Mapped with local names</span></span>
            </div>
            <div className="snapshot-item">
              <span className="dot" style={{ background: 'var(--marigold-soft)', color: 'var(--warn)' }}><Icon name="☀" size={20} /></span>
              <span><b>9 Solar Kits</b><span>Field-tested ROI data</span></span>
            </div>
            <div className="snapshot-item">
              <span className="dot" style={{ background: 'var(--violet-soft)', color: 'var(--violet)' }}><Icon name="📖" size={20} /></span>
              <span><b>20 Chapters</b><span>Complete field handbook</span></span>
            </div>
            <span className="snapshot-badge"><Icon name="✅" size={16} /> 3 states validated</span>
          </aside>
        </div>
      </section>

      <EventFeature />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">The Journey</div>
              <h2>Fisheries Value Chain</h2>
              <p>From seed production to market delivery — every step matters.</p>
            </div>
          </div>
          <ValueChainStrip onStep={() => navigate('/explore')} />
        </div>
      </section>

      <section className="section dim">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Farming Systems</div>
              <h2>Choose Your Approach</h2>
              <p>From traditional ponds to advanced RAS — find what fits your context.</p>
            </div>
            <Link className="btn btn-line btn-sm" to="/explore">View All <Icon name="arrow" size={14} /></Link>
          </div>
          <div className="grid cols-3">
            {FARMING_SYSTEMS.slice(0, 6).map((s) => <SystemCard key={s.id} sys={s} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Explore Species</div>
              <h2>Find Your Fish</h2>
              <p>From Indian Major Carps to ornamental species — choose based on your conditions.</p>
            </div>
            <Link className="btn btn-line btn-sm" to="/species">All Species <Icon name="arrow" size={14} /></Link>
          </div>
          <div className="grid cols-3">
            {SPECIES.slice(0, 6).map((s) => <SpeciesCard key={s.id} sp={s} />)}
          </div>
        </div>
      </section>

      <section className="section dim">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Practical Tools</div>
              <h2>Field-Ready Calculators</h2>
              <p>Water quality, stocking density, feed requirements, and more.</p>
            </div>
          </div>
          <div className="link-grid">
            {TOOLS.map((t) => (
              <Link key={t.id} className="link-row" to={`/tools/${t.id}`}>
                <span className="lr-ic"><Icon name={t.icon} size={19} /></span>
                {t.name}
                <Icon name="arrow" size={16} className="arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <div>
              <div className="eyebrow"><Icon name="☀" size={14} /> Solar Solutions</div>
              <h2>Power Your Farm with Solar</h2>
              <p>Field-tested solar technologies with documented ROI and impact data.</p>
            </div>
            <Link className="btn btn-solar btn-sm" to="/solar">View Library <Icon name="arrow" size={14} /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Stories from the Field</div>
              <h2>Real Farms, Real Results</h2>
              <p>Implementation outcomes from Assam, Jharkhand, and Odisha.</p>
            </div>
            <Link className="btn btn-line btn-sm" to="/stories">All Stories <Icon name="arrow" size={14} /></Link>
          </div>
          <div className="grid cols-3">
            {CASE_STUDIES.slice(0, 3).map((cs) => <StoryCard key={cs.id} cs={cs} to={`/stories?open=${cs.id}`} />)}
          </div>
        </div>
      </section>

      <footer className="jp-footer">
        <div className="wrap cols">
          <div>
            <h4>Jal Pathways</h4>
            <p>Practical pathways for climate-resilient aquaculture. Built for the Indian fisheries sector.</p>
            <p style={{ fontSize: '.8rem', opacity: 0.8 }}>Based on the Fisheries Handbook developed for SELCO Foundation.</p>
          </div>
          <div>
            <h4>Chapters</h4>
            {CHAPTERS.slice(0, 5).map((c) => <Link key={c.id} to={`/chapter/${c.id}`}>{c.title}</Link>)}
          </div>
          <div>
            <h4>Tools</h4>
            {TOOLS.map((t) => <Link key={t.id} to={`/tools/${t.id}`}>{t.name}</Link>)}
          </div>
          <div>
            <h4>Resources</h4>
            <Link to="/glossary">Glossary</Link>
            <Link to="/species">Species Explorer</Link>
            <Link to="/solar">Solar Solutions</Link>
            <Link to="/records">Farm Records</Link>
            <Link to="/handbook">India Fisheries Handbook</Link>
            <Link to="/event">National Convening · 7 Oct</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
