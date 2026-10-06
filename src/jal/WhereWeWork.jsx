import { useEffect, useState } from 'react';
import { INDIA_MAP } from '../data/indiaMap.js';

/* Where We Work — "Fisheries, ready for a changing climate" (aquaculture across India).
   Rebuilt from aquaculture-across-india.html with the same content and behaviour. */

const STATES = ['Maharashtra', 'Karnataka', 'Odisha', 'Jharkhand', 'Andhra Pradesh', 'Telangana', 'Assam', 'Meghalaya', 'Mizoram', 'Nagaland'];
const INFO = {
  'Karnataka': { where: 'Udupi', activities: ['Pearl culture', 'Live fish vending vehicles set up'], status: 'Work reported' },
  'Maharashtra': { where: 'Gadchiroli', activities: ['Pond culture with new fish farmers'], status: 'Work reported' },
  'Jharkhand': { where: 'Hazaribagh and the Jamshedpur area', activities: ['Pond culture', 'Recirculating aquaculture system (RAS) units', 'Biofloc', 'Live fish vending'], status: 'Work reported' },
  'Odisha': { where: 'Puri and Khordha region', activities: ['RAS units', 'Pond culture'], status: 'Work reported' },
  'Assam': { where: 'Kamrup, Nagaon and Udalguri', activities: ['End-to-end fisheries value chain', 'From hatchery to fish drying'], status: 'Work reported' },
  'Meghalaya': { where: 'East Khasi Hills and Ri Bhoi', activities: ['Trout culture'], status: 'Work reported' },
  'Mizoram': { where: 'Kolasib and Mamit', activities: ['RAS units'], status: 'Work reported' },
  'Nagaland': { where: 'Near Dimapur', activities: ['Biofloc units', 'Fish ponds', 'Feed mills'], status: 'Planned' },
  'Andhra Pradesh': { where: 'West Godavari and Kakinada region', activities: ['Shrimp culture', 'Murrel biofloc unit'], status: 'Work reported' },
  'Telangana': { where: 'Hyderabad', activities: ['Live fish vending and marketing'], status: 'Work reported' },
};
const SOLUTIONS = ['Fish Hatchery with RAS Unit', 'Solar-based Diffusers for Nursery Pond', 'Solar-based Jet Aerators', 'Solar-based Biofloc Unit', 'Solar-based Mini RAS Unit', 'Solar-based Aquaponics', 'Solar-based Ornamental Fish Breeding and Rearing', 'Solar-based Water Pump', 'Solar-based Feed Mill', 'Solar Dryer', 'Field Lab'];
const ANCHORS = { Maharashtra: [240, 375], Karnataka: [224, 488], Odisha: [415, 351], Jharkhand: [425, 288], 'Andhra Pradesh': [320, 462], Telangana: [288, 416], Assam: [574, 258], Meghalaya: [553, 274], Mizoram: [589, 300], Nagaland: [619, 236] };
const COLORS = ['#eab56a', '#5eb2b5', '#ee987e', '#aaa2d5', '#83b891', '#edcd71', '#75baca', '#c3ad73', '#ca94b2', '#98b0dc'];
const LABELS = [
  ['Maharashtra', 240, 390], ['Karnataka', 223, 502], ['Odisha', 415, 369], ['Jharkhand', 427, 300], ['Andhra Pradesh', 324, 450],
  ['Telangana', 293, 411], ['Assam', 574, 226], ['ML', 555, 258], ['MZ', 593, 304], ['NL', 621, 238],
];
const pad2 = (n) => String(n).padStart(2, '0');

export default function WhereWeWork() {
  const [selected, setSelected] = useState('Assam');
  const [showNames, setShowNames] = useState(true);
  const [jump, setJump] = useState(0);
  const idx = STATES.indexOf(selected);
  const detail = INFO[selected];
  const [ax, ay] = ANCHORS[selected];
  const planned = detail.status === 'Planned';

  // On phones, picking a state from the list scrolls to its details
  useEffect(() => {
    if (jump && window.innerWidth < 768) document.querySelector('.aq-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [jump]);

  const choose = (name, fromList = false) => {
    setSelected(name);
    if (fromList) setJump((n) => n + 1);
  };

  return (
    <div className="aq">
      <div className="wrap">
        <header className="aq-head">
          <h1>Fisheries, ready for a changing climate</h1>
          <p className="aq-fact">India · Fisheries &amp; climate-resilient aquaculture</p>
          <p className="aq-intro">Explore our fisheries and climate-resilient aquaculture activities across India.</p>
        </header>

        <div className="aq-count"><span>10 STATES IN VIEW</span></div>

        <div className="aq-layout">
          <section className="aq-map" aria-label="India state map">
            <div className="aq-toolbar">
              <span>Tap a coloured state</span>
              <button type="button" aria-pressed={showNames} onClick={() => setShowNames(!showNames)}>
                {showNames ? 'Hide' : 'Show'} labels
              </button>
            </div>
            <svg viewBox="0 15 700 690" role="img" aria-label="India map with ten work states highlighted">
              <defs>
                <marker id="aq-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0 0 L6 3 L0 6" fill="none" stroke="#251f21" strokeWidth="1.2" />
                </marker>
                <pattern id="aq-water" width="35" height="35" patternUnits="userSpaceOnUse">
                  <path d="M0 18 Q9 12 18 18 T35 18" fill="none" stroke="#daebec" strokeWidth=".6" />
                </pattern>
              </defs>
              <rect width="700" height="720" fill="#f6fbfb" />
              <rect width="700" height="720" fill="url(#aq-water)" />
              {INDIA_MAP.map((s) => {
                const i = STATES.indexOf(s.name);
                const active = i >= 0;
                const isSel = selected === s.name;
                return (
                  <path
                    key={s.name}
                    d={s.d}
                    fill={active ? COLORS[i] : '#e6e8e5'}
                    stroke={isSel ? '#251f21' : '#fff'}
                    strokeWidth={isSel ? 2.3 : 0.8}
                    fillRule="evenodd"
                    className={active ? 'aq-state on' : 'aq-state'}
                    role={active ? 'button' : undefined}
                    tabIndex={active ? 0 : undefined}
                    aria-label={active ? `Select ${s.name}` : undefined}
                    aria-pressed={active ? isSel : undefined}
                    onClick={() => active && choose(s.name)}
                    onKeyDown={(e) => {
                      if (active && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); choose(s.name); }
                    }}
                  >
                    <title>{s.name}</title>
                  </path>
                );
              })}
              <g pointerEvents="none">
                <circle cx={ax} cy={ay} r="4" fill="#251f21" />
                <path d={`M${ax} ${ay} Q${ax + 40} ${ay - 40} 647 382`} fill="none" stroke="#251f21" strokeWidth="1.4" strokeDasharray="5 4" markerEnd="url(#aq-arrow)" />
                <rect x="543" y="391" width="132" height="39" rx="6" fill="white" stroke="#eae9ea" />
                <text x="609" y="415" textAnchor="middle" fontSize="11" fill="#251f21">
                  Explore {selected.length > 15 ? 'state details' : selected}
                </text>
              </g>
              {showNames && (
                <g className="aq-labels" pointerEvents="none">
                  {LABELS.map(([t, x, y]) => <text key={t} x={x} y={y}>{t}</text>)}
                </g>
              )}
              <text className="aq-sea" x="87" y="510">ARABIAN SEA</text>
              <text className="aq-sea" x="428" y="500">BAY OF BENGAL</text>
            </svg>
            <p className="aq-caption">Colours identify states, not project scale. The dotted arrow is a state-to-detail callout, not a route. Exact project sites are not plotted. ML: Meghalaya · MZ: Mizoram · NL: Nagaland.</p>
          </section>

          <section className="aq-detail" aria-live="polite" aria-label="Selected state details" style={{ borderTopColor: COLORS[idx] }}>
            <span className="aq-eyebrow">STATE {pad2(idx + 1)} / 10</span>
            <h2>{selected}</h2>
            <span className={`aq-status${planned ? ' planned' : ''}`}>{detail.status}</span>
            <div className="aq-body">
              <h3>{planned ? 'Where we plan to work' : 'Where we work'}</h3>
              <p className="aq-location">{detail.where}</p>
              <h3>{planned ? 'Planned activities' : 'What we do'}</h3>
              <ul>{detail.activities.map((a) => <li key={a}>{a}</li>)}</ul>
            </div>
            {planned && <p className="aq-note">These activities are planned and have not yet been implemented.</p>}
          </section>
        </div>

        <section className="aq-block">
          <h2 className="aq-label">Solutions</h2>
          <ul className="aq-solutions">
            {SOLUTIONS.map((name, i) => (
              <li key={name}><span className="aq-num">{pad2(i + 1)}</span><span>{name}</span></li>
            ))}
          </ul>
        </section>

        <section className="aq-block">
          <h2 className="aq-label">Explore all 10 states</h2>
          <div className="aq-states">
            {STATES.map((s, i) => (
              <button key={s} type="button" aria-pressed={s === selected} className={s === selected ? 'picked' : ''} onClick={() => choose(s, true)}>
                <span className="aq-swatch" style={{ background: COLORS[i] }} />
                <span>{s}</span>
                <span className="aq-go" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
        </section>

        <aside className="aq-callout">
          <b>Arrow direction</b>
          <p>Arrows currently connect the selected state to its detail callout; a common origin has not been specified.</p>
        </aside>

        <p className="aq-foot">Updated 6 October 2026. Boundary geometry: India Geodata community dataset, SOI-labelled 2024 release; simplified for display, not independently certified. This is a programme overview, not a survey map.</p>
      </div>
    </div>
  );
}
