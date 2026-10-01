import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { VC_DATA, VC_SECTION_MAP } from '../data/handbook.js';
import ValueChain from './ValueChain.jsx';
import { HatcherySection, BioflocSection, RasSection, ProcessingSection } from './Chapters.jsx';
import { SpeciesGuide, WaterQualitySection, ClimateSection } from './Sections.jsx';
import { DiseaseChecker, RecordKeeper, ProfitCalculator } from './Tools.jsx';
import { SecHead, goTo } from './common.jsx';

const NAV = [
  { id: 'overview', label: 'Overview', icon: 'compass' },
  { id: 'valuechain', label: 'Value Chain', icon: 'chain' },
  { id: 'species', label: 'Species Explorer', icon: '🐟' },
  { id: 'hatchery', label: 'Hatchery', icon: '🥚' },
  { id: 'biofloc', label: 'Biofloc Tech', icon: '🦠' },
  { id: 'ras', label: 'RAS', icon: '🔄' },
  { id: 'waterquality', label: 'Water Quality', icon: '💧' },
  { id: 'diseases', label: 'Disease Checker', icon: '🔬' },
  { id: 'processing', label: 'Fish Processing', icon: '❄' },
  { id: 'climateresilient', label: 'Climate-Resilient Tech', icon: 'sun' },
  { id: 'records', label: 'Record Keeper', icon: 'clipboard' },
  { id: 'calculator', label: 'Profit Calculator', icon: 'calc' },
];

export default function Handbook() {
  const [sideOpen, setSideOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [active, setActive] = useState('overview');
  const [progress, setProgress] = useState(0);
  const [node, setNode] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      let cur = 'overview';
      NAV.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setNode(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const nav = (id) => {
    goTo(id);
    setSideOpen(false);
  };
  const d = node && VC_DATA[node];

  return (
    <div className="hb">
      <button className="hb-menu" onClick={() => setSideOpen(!sideOpen)} aria-label="Open chapters menu"><Icon name={sideOpen ? '✕' : 'menu'} size={20} strokeWidth={2} /></button>
      <div className={`hb-overlay${sideOpen ? ' open' : ''}`} onClick={() => setSideOpen(false)} />

      <aside className={`hb-side${sideOpen ? ' open' : ''}`}>
        <div className="hb-brand">
          <span className="mk"><Icon name="🐟" size={26} /></span>
          <div>
            <div className="t">India Fisheries Handbook</div>
            <div className="s">Digital Interactive Edition · 2025</div>
          </div>
        </div>
        <div className="hb-search">
          <Icon name="🔍" size={15} />
          <input id="hb-nav-search" type="text" placeholder="Search chapters..." value={filter} onChange={(e) => setFilter(e.target.value)} aria-label="Search chapters" />
        </div>
        <div className="hb-progress"><div style={{ width: progress + '%' }} /></div>
        <nav className="hb-nav" aria-label="Handbook chapters">
          {NAV.filter((n) => n.label.toLowerCase().includes(filter.toLowerCase())).map((n) => (
            <button key={n.id} className={active === n.id ? 'active' : ''} onClick={() => nav(n.id)}>
              <span className="no">{String(NAV.indexOf(n)).padStart(2, '0')}</span>
              <Icon name={n.icon} size={16} />
              {n.label}
            </button>
          ))}
        </nav>
        <div className="hb-side-foot">
          <Link to="/"><Icon name="back" size={15} /> Jal Pathways platform</Link>
          <Link to="/event"><Icon name="calendar" size={15} /> National Convening · 7 Oct</Link>
          <a href={`${import.meta.env.BASE_URL}India_Fisheries_Handbook_Complete.pdf`} target="_blank" rel="noopener"><Icon name="📄" size={15} /> Handbook PDF</a>
        </div>
      </aside>

      <div className="hb-main">
        <section className="hb-hero" id="overview">
          <div className="eyebrow">India Fisheries Handbook · Digital Interactive Edition</div>
          <h1>Sustainable Freshwater <em>Aquaculture</em> for India</h1>
          <p className="sub">A comprehensive guide for over 2 crore small and marginal fish farmers — from hatchery operations and pond management to climate-resilient systems.</p>
          <div className="hb-stats">
            <a className="hb-stat" href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1986155&reg=48&lang=2" target="_blank" rel="noopener">
              <div className="n">3Cr+</div><div className="l">People dependent on fisheries<sup>1</sup></div>
            </a>
            <a className="hb-stat" href="https://www.dof.gov.in/static/uploads/2025/09/bf1d10787d87fd2c100cb1eb996440f7.pdf" target="_blank" rel="noopener">
              <div className="n">17MT</div><div className="l">Annual fish production 2022-23<sup>2</sup></div>
            </a>
            <a className="hb-stat" href="https://www.groundreport.in/latest/india-becomes-worlds-second-largest-producer-of-aquatic-animals-fao-report/" target="_blank" rel="noopener">
              <div className="n">2nd</div><div className="l">India's global rank in production<sup>3</sup></div>
            </a>
          </div>
          <div className="hb-refs">
            <span><sup>1</sup> <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1986155&reg=48&lang=2" target="_blank" rel="noopener">PIB India — Fisheries Sector Data</a></span>
            <span><sup>2</sup> <a href="https://www.dof.gov.in/static/uploads/2025/09/bf1d10787d87fd2c100cb1eb996440f7.pdf" target="_blank" rel="noopener">Handbook on Fisheries Statistics 2023 (DoF)</a></span>
            <span><sup>3</sup> <a href="https://www.groundreport.in/latest/india-becomes-worlds-second-largest-producer-of-aquatic-animals-fao-report/" target="_blank" rel="noopener">GroundReport — FAO Ranking</a></span>
          </div>
        </section>

        <div className="hb-content">
          <section className="hb-sec" id="valuechain">
            <SecHead no="01" title="Fisheries Value Chain" desc="An interactive map of how fish move from seed to market. Click any node to learn what it involves, why it matters, and what challenges and solutions exist at each stage." />
            <ValueChain onShow={setNode} onGoto={goTo} />
          </section>

          <SpeciesGuide />

          <p className="hb-intro">The following sections walk through each stage of the fisheries value chain — from hatchery operations and species selection to grow-out farming, processing, and marketing. Each chapter covers what the stage involves, the challenges farmers face, and the climate-smart solutions being deployed to overcome them. Click on any section in the sidebar or scroll through to explore.</p>

          <HatcherySection />
          <BioflocSection />
          <RasSection />
          <WaterQualitySection />
          <DiseaseChecker />
          <ProcessingSection />
          <ClimateSection />
          <RecordKeeper />
          <ProfitCalculator />
        </div>

        <footer className="hb-footer">
          <div><strong>India Fisheries Handbook</strong> — Digital Interactive Edition with Real Photography<br />Field sites: Assam, Jharkhand, Odisha</div>
          <Link to="/">Open the Jal Pathways platform →</Link>
        </footer>
      </div>

      {d && (
        <>
          <div className="modal-backdrop" style={{ background: 'rgba(6,22,20,.45)' }} onClick={() => setNode(null)} />
          <div className="drawer" role="dialog" aria-modal="true" aria-labelledby="vc-title">
            <div className="drawer-head">
              <div>
                <h3 id="vc-title">{d.title}</h3>
                <span className="badge">{d.badge}</span>
              </div>
              <button className="icon-btn" onClick={() => setNode(null)} aria-label="Close panel"><Icon name="✕" size={16} /></button>
            </div>
            <div className="drawer-body">
              <h4>Overview</h4>
              <p>{d.overview}</p>
              <h4>Key Activities</h4>
              <ul>{d.keyActivities.map((a) => <li key={a}>{a}</li>)}</ul>
              <h4>Why It Matters</h4>
              <p>{d.importance}</p>
              {d.inputs && (<><h4>Inputs</h4><p>{d.inputs}</p></>)}
              {d.outputs && (<><h4>Outputs</h4><p>{d.outputs}</p></>)}
              {VC_SECTION_MAP[node] && (
                <button className="btn btn-solar goto" onClick={() => { const t = VC_SECTION_MAP[node]; setNode(null); setTimeout(() => goTo(t), 50); }}>
                  Jump to this chapter <Icon name="arrow" size={15} />
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
