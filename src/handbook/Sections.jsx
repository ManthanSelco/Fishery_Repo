import { useState } from 'react';
import { SecHead } from './common.jsx';
import { Fig, InfoBox } from './Chapters.jsx';

const SP = (n) => `${import.meta.env.BASE_URL}images/sp-${n}.jpg`;

const SPECIES = [
  { img: 'catla', name: 'Catla', latin: 'Catla catla', badge: 'IMC', cat: 'common' },
  { img: 'rohu', name: 'Rohu', latin: 'Labeo rohita', badge: 'IMC', cat: 'common' },
  { img: 'mrigal', name: 'Mrigal', latin: 'Cirrhinus mrigala', badge: 'IMC', cat: 'common' },
  { img: 'grass_carp', name: 'Grass Carp', latin: 'Ctenopharyngodon idella', badge: 'Carp', cat: 'common' },
  { img: 'silver_carp', name: 'Silver Carp', latin: 'Hypophthalmichthys molitrix', badge: 'Carp', cat: 'common' },
  { img: 'common_carp', name: 'Common Carp', latin: 'Cyprinus carpio', badge: 'Carp', cat: 'common' },
  { img: 'amur_carp', name: 'Amur Carp', latin: 'Cyprinus carpio haematopterus', badge: 'Selective Breed', cat: 'common' },
  { img: 'tilapia', name: 'GIFT Tilapia', latin: 'Oreochromis niloticus', badge: 'Exotic', cat: 'exotic' },
  { img: 'pangasius', name: 'Pangasius', latin: 'Pangasius hypophthalmus', badge: 'Exotic', cat: 'exotic' },
  { img: 'magur', name: 'Magur', latin: 'Clarias batrachus', badge: 'High Value', cat: 'highvalue' },
  { img: 'murrel', name: 'Murrel', latin: 'Channa striata', badge: 'High Value', cat: 'highvalue' },
  { img: 'pabda', name: 'Pabda', latin: 'Ompok bimaculatus', badge: 'High Value', cat: 'highvalue' },
  { img: 'kawai', name: 'Kawai / Climbing Perch', latin: 'Anabas testudineus', badge: 'High Value', cat: 'highvalue' },
  { img: 'singhi', name: 'Singhi', latin: 'Heteropneustes fossilis', badge: 'High Value', cat: 'highvalue' },
  { img: 'mola', name: 'Mola', latin: 'Amblypharyngodon mola', badge: 'SIS', cat: 'sis' },
];
const TABS = [['all', 'All Species'], ['common', 'Indian Major Carps'], ['exotic', 'Exotic / Non-Carp'], ['highvalue', 'High Value'], ['sis', 'Small Indigenous']];
const BADGE = { common: 't-production', exotic: 't-markets', highvalue: 't-health', sis: 't-water' };

export function SpeciesGuide() {
  const [tab, setTab] = useState('all');
  return (
    <section className="hb-sec" id="species">
      <SecHead no="02" title="Species Photo Guide" desc="Before choosing what to farm, understand what's available. This chapter introduces the key species — Indian Major Carps, exotic species, high-value indigenous fish, and small indigenous species — with real photographs and guidance on which suits your climate, water type, and market." />
      <div className="pills">
        {TABS.map(([k, l]) => (
          <button key={k} className={`pill${tab === k ? ' active' : ''}`} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>
      <div className="hb-species">
        {SPECIES.filter((s) => tab === 'all' || s.cat === tab).map((s) => (
          <div className="hb-sp" key={s.img}>
            <div className="photo"><img src={SP(s.img)} alt={s.name} loading="lazy" /></div>
            <div className="info">
              <div className="nm">{s.name}</div>
              <div className="lat">{s.latin}</div>
              <span className={`tag ${BADGE[s.cat]}`}>{s.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const WQ = [
  { p: 'Temperature', v: '25-32°C', r: 'Below 20°C → slow growth', s: 'optimal' },
  { p: 'Dissolved Oxygen', v: '> 5 mg/L', r: 'Below 3 → stress; below 1 → mortality', s: 'optimal' },
  { p: 'pH Level', v: '7.0-8.5', r: 'Below 6 or above 9 → stress', s: 'optimal' },
  { p: 'Ammonia (NH3)', v: '< 0.02 mg/L', r: 'Above 0.5 mg/L → toxic', s: 'caution' },
  { p: 'Nitrite (NO2)', v: '< 0.1 mg/L', r: 'Above 1 mg/L → brown blood disease', s: 'caution' },
  { p: 'Transparency', v: '25-40 cm', r: 'Below 15 → bloom; above 60 → low nutrients', s: 'caution' },
  { p: 'Alkalinity', v: '75-200 mg/L', r: 'Stabilises pH; lime corrects low levels', s: 'optimal' },
  { p: 'H2S', v: '0 mg/L', r: 'Any detectable level = emergency', s: 'danger' },
];
const WQS = {
  optimal: ['Optimal', 'var(--ok)', 'var(--ok-soft)'],
  caution: ['Monitor', 'var(--warn)', 'var(--warn-soft)'],
  danger: ['Danger', 'var(--crit)', 'var(--crit-soft)'],
};

export function WaterQualitySection() {
  return (
    <section className="hb-sec" id="waterquality">
      <SecHead no="06" title="Water Quality Parameters" desc="The invisible factor that determines everything. Learn the optimal ranges for temperature, oxygen, pH, ammonia, and more — and what to do when parameters go outside safe limits." />
      <div className="wq-grid">
        {WQ.map((w) => {
          const [label, c, bg] = WQS[w.s];
          return (
            <div className="wq" key={w.p} style={{ '--s': c, '--sbg': bg }}>
              <div className="p">{w.p}</div>
              <div className="v">{w.v}</div>
              <div className="r">{w.r}</div>
              <span className="st">{label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const STRIP = [
  ['160w-air-blower-nursery', '160W air blower nursery', '160W Diaphragm air blower — nursery aeration system'],
  ['diffuser-type-aeration', 'Diffuser type aeration', 'Diffuser-type aeration in operation'],
  ['solar-nursery-kalong-kapili-assam', 'Solar nursery Kalong Kapili Assam', 'Nursery aeration — Kalong Kapili, Assam'],
  ['solar-fountain-aerator-jharkhand', 'Solar fountain aerator Jharkhand', 'Fountain aerator — Jharkhand'],
  ['solar-fountain-aerator-jharkhand-2', 'Solar fountain aerator Jharkhand 2', 'Fountain aerator — Jharkhand (2nd unit)'],
  ['solar-biofloc-giridih-jharkhand', 'Solar biofloc Giridih Jharkhand', 'Biofloc — Giridih, Jharkhand'],
  ['solar-biofloc-assam', 'Solar biofloc Assam', 'Biofloc unit — Assam'],
  ['solar-jet-aerator-grow-out-pond-assam', 'Solar jet aerator grow-out pond Assam', 'Jet aerator — grow-out pond, Assam'],
  ['solar-ras-unit-field', 'Solar RAS unit field', 'RAS unit — field deployment'],
  ['solar-cold-storage-unit', 'Solar cold storage unit', 'Cold storage — post-harvest preservation'],
  ['solar-fish-dryer-system', 'Solar fish dryer system', 'Fish drying system'],
];

export function ClimateSection() {
  return (
    <section className="hb-sec" id="climateresilient">
      <SecHead no="09" title="Climate-Resilient Technologies: Real Deployments" desc="Proof that it works. Real photographs and verified ROI data from field deployments in Assam, Jharkhand, and Odisha — showing how solar-powered systems eliminate grid dependency and transform small-farmer economics." />
      <div className="impact-grid">
        <div className="impact"><div className="l">Nursery Pond (Assam)</div><div className="n">3x</div><div className="d">Survival rate — spawn to fingerling — with spiral diffuser aeration</div></div>
        <div className="impact"><div className="l">Income Increase (Assam)</div><div className="n">3179%</div><div className="d">Kalong Kapili pilot. Capex Rs 1,90,000. RoI: 2.13</div></div>
        <div className="impact"><div className="l">Grow-out Aerator (Jharkhand)</div><div className="n">46.5%</div><div className="d">Income increase. Survival up 20%. Capex Rs 5,80,000</div></div>
        <div className="impact"><div className="l">Cost Reduction</div><div className="n">20-54%</div><div className="d">Operational cost reduction across all pilot systems</div></div>
      </div>
      <div className="strip" aria-label="Field deployment photos (scroll sideways)">
        {STRIP.map(([src, alt, cap]) => <Fig key={src} src={src} alt={alt} caption={cap} />)}
      </div>
      <InfoBox kind="tip" icon="bolt" title="Why Climate-Resilient?">In rural India, grid electricity is unreliable — frequent blackouts and voltage fluctuations force farmers to rely on costly diesel generators. Climate-resilient aquaculture systems <strong>eliminate this constraint entirely</strong>, enabling round-the-clock aeration and processing independent of the grid.</InfoBox>
    </section>
  );
}
