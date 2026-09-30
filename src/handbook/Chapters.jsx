import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import { SecHead } from './Handbook.jsx';

const P = (n) => `${import.meta.env.BASE_URL}images/hb-${n}.jpg`;

export function Fig({ src, alt, caption }) {
  return (
    <figure className="fig photo">
      <img src={P(src)} alt={alt} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function InfoBox({ kind = '', icon, title, children }) {
  return (
    <div className={`info-box ${kind}`}>
      <span className="ibi"><Icon name={icon} size={20} strokeWidth={2} /></span>
      <div><div className="ibt">{title}</div>{children}</div>
    </div>
  );
}

export function Collapsible({ id, icon, title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="chap">
      <button className="chap-head" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
        <span className="ci"><Icon name={icon} size={22} /></span>
        <span className="ct">{title}</span>
        <span className="mono" style={{ color: 'var(--ink-faint)' }}>{open ? 'Close' : 'Read chapter'}</span>
        <Icon name="chevron" size={18} className="chev" />
      </button>
      {open && <div className="chap-body" id={id}>{children}</div>}
    </div>
  );
}

export function DataTable({ head, rows }) {
  return (
    <div className="table-wrap">
      <table className="data">
        <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={i}>{i === 0 ? <b>{c}</b> : c}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

export function HatcherySection() {
  return (
    <section className="hb-sec" id="hatchery">
      <SecHead no="03" title="Hatchery" desc="The foundation of aquaculture. This chapter covers what hatcheries do, the challenges they face in rural India, and the climate-smart infrastructure being deployed to make seed production reliable and year-round." />
      <Collapsible id="hatchery-body" icon="🥚" title="Spawning, Incubation & Nursery Systems — What, Why, How">
        <div className="prose">
          <h3>What is a Fish Hatchery?</h3>
          <p>A fish hatchery is a facility dedicated to the controlled breeding, hatching, and early rearing of fish. Hatcheries are the foundation of aquaculture — they produce the seed (spawn, fry, and fingerlings) that farmers stock into ponds, cages, and grow-out systems. Without reliable hatcheries, the entire aquaculture value chain breaks down.</p>
          <p>In India, most small-scale hatcheries produce Indian Major Carps (Rohu, Catla, Mrigal) and exotic species like Tilapia and Pangasius using induced breeding techniques. The process involves selecting mature broodstock, injecting hormones to trigger spawning, collecting fertilised eggs, incubating them until hatching, and rearing the delicate larvae through the nursery stage.</p>
          <h3>Hatchery Complex Infrastructure</h3>
        </div>
        <div className="figs">
          <Fig src="hatchery-complex-showing-overhead-tank-spawning-am" alt="Hatchery complex showing overhead tank, spawning & hatching pools" caption="Hatchery complex showing overhead tank, spawning & hatching pools" />
          <Fig src="spawning-pool-in-operation-with-showering" alt="Spawning pool in operation with showering" caption="Spawning pool in active operation with water showering system" />
        </div>
        <div className="prose">
          <h3>Watch: Inside a Working Fish Hatchery</h3>
          <p><a className="btn btn-line btn-sm" href="https://www.youtube.com/watch?v=LuFCMPUAd90" target="_blank" rel="noopener"><Icon name="play" size={16} /> Watch "Spawning pool in active operation with water showering system" on YouTube</a></p>
        </div>
        <div className="prose">
          <h3>Challenges Facing Indian Hatcheries</h3>
          <p>Climate-related challenges are disrupting hatchery operations across India. Rising temperatures alter spawning timing and egg viability. Erratic rainfall affects water quality and availability. Most critically, <strong>unreliable grid electricity</strong> forces hatcheries to shut down during blackouts — killing eggs, fry, and broodstock. Farmers lose entire breeding cycles due to power failures during peak spawning season.</p>
          <p>Traditional cement hatcheries are expensive to build, impossible to relocate, and dependent on continuous grid power. For small and marginal farmers in rural India, this infrastructure gap is the single biggest barrier to reliable seed production.</p>
        </div>
        <InfoBox kind="alert" icon="⚠" title="Grid Power Dependency">In rural India, grid electricity is unreliable — frequent blackouts and voltage fluctuations force hatcheries to rely on costly diesel generators or shut down entirely. During spawning season, even a few hours without power can destroy an entire breeding cycle.</InfoBox>
        <div className="prose">
          <h3>Solutions: Climate-Smart Hatchery Technology</h3>
          <p>SELCO Foundation and partners are deploying climate-resilient hatchery systems that eliminate grid dependency and work year-round, independent of weather conditions.</p>
          <h3>Climate-Smart FRP Tanks</h3>
          <p>Traditional cement hatcheries are being replaced with <strong>Fibre-Reinforced Plastic (FRP) tanks</strong> — climate-resilient, portable, and climate-compatible. FRP hatcheries can operate off-grid year-round.</p>
          <h3>Hapa Net Construction &amp; Technique</h3>
          <p>A hapa is a rectangular net enclosure suspended from poles in a pond, used to hold broodfish, hatch eggs, or rear spawn in a controlled space within open water. Correct anchoring and weighting keeps the net shape stable and prevents fish escape.</p>
        </div>
        <div className="figs">
          <Fig src="hapa-net-setup-with-pole-anchoring" alt="Hapa net setup with pole anchoring" caption="Hapa net setup — thick nylon string anchors the frame to poles, with a weighted rock keeping the bottom taut" />
          <Fig src="hapa-frame-fish-movement-diagram" alt="Hapa frame fish movement diagram" caption="Hapa frame detail — controlled entry and release of fish through the net enclosure" />
        </div>
        <InfoBox icon="sun" title="Solar-Powered Nursery">Solar spiral diffuser aeration in nursery ponds has increased spawn-to-fingerling survival <strong>3-fold</strong> in Assam and Jharkhand while maintaining water temperature at 28-32°C independent of grid power.</InfoBox>
      </Collapsible>
    </section>
  );
}

export function BioflocSection() {
  return (
    <section className="hb-sec" id="biofloc">
      <SecHead no="04" title="Biofloc Technology" desc="A climate-smart grow-out solution. Biofloc eliminates water exchange, reduces feed costs by 30–40%, and turns waste into food — making it ideal for water-scarce and flood-prone regions." />
      <Collapsible id="biofloc-body" icon="🦠" title="Biofloc Technology — Zero Water Exchange Farming">
        <div className="prose">
          <p>Biofloc Technology (BFT) relies on beneficial bacteria to treat ammonia-rich waste, forming nutrient-rich microbial flocs that fish consume — drastically reducing feed costs and eliminating water exchange.</p>
          <h3>Tank Systems in the Field</h3>
        </div>
        <div className="figs three">
          <Fig src="gi-frame-biofloc-tanks" alt="GI frame biofloc tanks" caption="GI frame biofloc tanks with shade net cover" />
          <Fig src="ms-zinc-coated-biofloc-tanks" alt="MS zinc coated biofloc tanks" caption="MS zinc-coated circular tanks" />
          <Fig src="biofloc-tank-system-with-net-covers" alt="Biofloc tank system with net covers" caption="Biofloc tank rows with mesh net covers to control sunlight and algal growth" />
        </div>
        <div className="prose">
          <h3>C:N Ratio Management Table</h3>
          <p>Maintaining the correct Carbon-to-Nitrogen ratio is the cornerstone of BFT management. Carbon sources (molasses, tapioca) are added based on Total Ammonia Nitrogen (TAN) levels.</p>
        </div>
        <DataTable
          head={['TAN Level (mg/L)', 'Carbon Source Needed', 'Action Required']}
          rows={[
            ['< 1.0', 'None', 'Monitor weekly'],
            ['1.0 – 2.0', 'Low addition', 'Add molasses at 10x TAN weight'],
            ['2.0 – 4.0', 'Moderate', 'Add carbon + increase aeration'],
            ['> 4.0', 'High — urgent', 'Partial water change + carbon addition'],
          ]}
        />
        <InfoBox icon="✅" title="BFT Solar Advantage">Solar-powered biofloc systems in Jharkhand achieved flood-proof operation, additional winter production cycles, and improved FCR — with 17% income increase recorded at pilot sites.</InfoBox>
      </Collapsible>
    </section>
  );
}

export function RasSection() {
  return (
    <section className="hb-sec" id="ras">
      <SecHead no="05" title="Recirculating Aquaculture Systems (RAS)" desc="The most advanced climate-resilient solution. RAS recycles 95–99% of water indoors, enabling year-round production independent of weather, grid power, or land availability." />
      <Collapsible id="ras-body" icon="🔄" title="Recirculating Aquaculture Systems (RAS) — The Most Intensive System">
        <div className="prose">
          <p>RAS is the most advanced climate-resilient aquaculture technology — intensive indoor fish production with 95-99% water recycled through biofilters, mechanical filters, UV sterilizers, and oxygenation systems.</p>
          <h3>RAS Equipment in the Field</h3>
        </div>
        <div className="figs">
          <Fig src="diaphragm-air-blowers-for-ras-aeration" alt="Diaphragm air blowers for RAS aeration" caption="Diaphragm air blowers — continuous aeration is essential for high-density RAS stocking" />
          <Fig src="ras-circular-tank-system-under-greenhouse-roofing" alt="RAS circular tank system under greenhouse roofing" caption="RAS circular tank battery under greenhouse-style roofing — controlled indoor environment" />
        </div>
        <div className="prose"><h3>RAS vs Pond Farming Comparison</h3></div>
        <DataTable
          head={['Parameter', 'Pond Farming', 'RAS']}
          rows={[
            ['Water use', 'High (100%/cycle)', 'Very low (1-5%/day)'],
            ['Climate dependency', 'High', 'None'],
            ['Stocking density', 'Low-Medium', 'Very High (50-80 kg/m³)'],
            ['Biosecurity', 'Low', 'Very High'],
            ['Capex', 'Low', 'High'],
            ['ROI timeline', '1-2 years', '3-5 years'],
          ]}
        />
      </Collapsible>
    </section>
  );
}

export function ProcessingSection() {
  return (
    <section className="hb-sec" id="processing">
      <SecHead no="08" title="Fish Processing, Solar Drying & Marketing" desc="Post-harvest value creation. This chapter covers how fish are preserved, processed, and marketed — with solar-powered solutions that eliminate diesel dependency and extend shelf life from hours to months." />
      <Collapsible id="proc-body" icon="❄" title="Fish Processing, Solar Drying & Marketing — From Water to Market">
        <div className="prose"><h3>Live Fish Marketing &amp; Transport</h3></div>
        <div className="figs">
          <Fig src="solar-based-live-fish-marketing-truck" alt="Solar-based live-fish marketing truck" caption="Solar-based live-fish marketing vehicle — roof panel powers aeration for live transport" />
          <Fig src="fresh-fish-marketing-at-local-market" alt="Fresh fish marketing at local market" caption="Fresh fish marketing — India's processed seafood market is valued at USD 20 billion" />
        </div>
        <div className="prose"><h3>Solar Fish Drying Technology</h3></div>
        <div className="figs one">
          <Fig src="solar-fish-dryer-with-polycarbonate-roofing" alt="Solar fish dryer with polycarbonate roofing" caption="Solar fish dryer — maintains 50-70°C optimal drying temperature, eliminating pest contamination vs. traditional sun drying" />
        </div>
        <DataTable
          head={['Method', 'Shelf Life', 'Solar Applicable']}
          rows={[
            ['Live / Fresh', 'Hours-1 day', 'Solar aerators in tank'],
            ['Chilling / Icing', '2-5 days', 'Solar cold room'],
            ['Solar Drying', '3-6 months', 'Solar-powered fans'],
            ['Smoking', '2-4 weeks', 'Partial'],
            ['Freezing', '6-12 months', 'Solar cold storage'],
          ]}
        />
      </Collapsible>
    </section>
  );
}
