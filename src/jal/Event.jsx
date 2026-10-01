import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { downloadFile } from '../components/download.js';
import { EVENT, PROGRAM, OUTCOMES, OUTCOMES_INTRO } from '../data/event.js';

/* ---------- time helpers (all in IST) ---------- */
const toMin = (hhmm) => { const [h, m] = hhmm.split(':').map(Number); return h * 60 + m; };
const istParts = (d = new Date()) => {
  const p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(d);
  const g = (t) => p.find((x) => x.type === t).value;
  return { date: `${g('year')}-${g('month')}-${g('day')}`, min: (Number(g('hour')) % 24) * 60 + Number(g('minute')) };
};

export function useEventStatus() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => { const t = setInterval(() => setNow(new Date()), 30000); return () => clearInterval(t); }, []);
  const start = new Date(EVENT.start), end = new Date(EVENT.end);
  const { date, min } = istParts(now);
  const eventDay = EVENT.start.slice(0, 10);
  const days = Math.round((new Date(eventDay + 'T00:00:00+05:30') - new Date(date + 'T00:00:00+05:30')) / 86400000);
  let state = 'upcoming';
  if (now >= start && now <= end) state = 'live';
  else if (now > end) state = 'past';
  const current = state === 'live' ? PROGRAM.find((s) => min >= toMin(s.start) && min < toMin(s.end)) : null;
  const label = state === 'live' ? 'Happening now' : state === 'past' ? 'Held on ' + EVENT.dateShort : days === 0 ? 'Today' : days === 1 ? 'Tomorrow' : `In ${days} days`;
  return { state, days, label, current };
}

function downloadICS() {
  const esc = (s) => s.replace(/[,;]/g, (c) => '\\' + c);
  const stamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Jal Pathways//Event//EN', 'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT', 'UID:fisheries-convening-2026-day1@jalpathways', `DTSTAMP:${stamp}`,
    'DTSTART:20261007T033000Z', 'DTEND:20261007T114500Z',
    `SUMMARY:${esc(EVENT.title)} — ${EVENT.kicker}`, `LOCATION:${esc(EVENT.venue)}`,
    `DESCRIPTION:${esc('Organised by ' + EVENT.organizer + '. Registration 9:00. Program 9:45 - 17:15.')}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
  downloadFile('Fisheries-Convening-Guwahati-2026.ics', ics, 'text/calendar');
}

const SECTIONS = [
  ['ev-overview', 'Overview'],
  ['ev-programme', 'Programme'],
  ['ev-outcomes', 'Outcomes'],
];
const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

/* Compact card used on the Home page */
export function EventFeature() {
  const st = useEventStatus();
  return (
    <section className="ev-feature-wrap">
      <div className="wrap">
        <Link to="/event" className="ev-feature">
          <div className="ev-date" aria-hidden="true">
            <span className="m">{EVENT.month}</span>
            <span className="d">{EVENT.day}</span>
            <span className="y">{EVENT.year}</span>
          </div>
          <div className="ev-feature-body">
            <div className="ev-feature-top">
              <span className="ev-kicker">{EVENT.kicker}</span>
              <span className={`ev-status ${st.state}`}><i />{st.label}</span>
            </div>
            <h2>{EVENT.title}</h2>
            <p className="ev-meta-line">
              <span><Icon name="📍" size={15} /> {EVENT.venue}</span>
              <span><Icon name="🔗" size={15} /> Organized by {EVENT.organizer}</span>
            </p>
          </div>
          <span className="btn btn-solar ev-feature-cta">View agenda <Icon name="arrow" size={15} /></span>
        </Link>
      </div>
    </section>
  );
}

export default function Event() {
  const st = useEventStatus();
  const [active, setActive] = useState('ev-overview');

  useEffect(() => {
    const onScroll = () => {
      let cur = SECTIONS[0][0];
      SECTIONS.forEach(([id]) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 180) cur = id; });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const sessions = PROGRAM.filter((p) => p.kind !== 'break');

  return (
    <div className="ev">
      {/* ---------- hero ---------- */}
      <section className="ev-hero">
        <div className="wrap ev-hero-grid">
          <div>
            <div className="ev-hero-tags">
              <span className="ev-kicker light">{EVENT.kicker}</span>
              <span className={`ev-status ${st.state} on-dark`}><i />{st.label}</span>
            </div>
            <h1>{EVENT.title}</h1>
            <p className="ev-lede">A one-day dialogue on climate resilience in aquaculture, from farm-level experience to a Vision 2036 for India, with field voices, expert and state perspectives, and thematic working groups.</p>
            <div className="hero-ctas">
              <button className="btn btn-solar" onClick={() => go('ev-programme')}><Icon name="clipboard" size={16} /> See the programme</button>
              <button className="btn btn-ghost-light" onClick={downloadICS}><Icon name="📥" size={16} /> Add to calendar</button>
            </div>
          </div>
          <dl className="ev-facts">
            <div><dt>Date</dt><dd>{EVENT.dateLabel}</dd><span>{EVENT.time}</span></div>
            <div><dt>Venue</dt><dd>{EVENT.venue}</dd></div>
            <div><dt>Participants</dt><dd>{EVENT.participants.map((p) => p.label).join(', ')}</dd></div>
            <div><dt>Organized by</dt><dd>{EVENT.organizer}</dd></div>
          </dl>
        </div>
      </section>

      {/* ---------- sticky sub-nav ---------- */}
      <nav className="ev-subnav" aria-label="Event sections">
        <div className="wrap">
          {SECTIONS.map(([id, label]) => (
            <button key={id} className={active === id ? 'active' : ''} onClick={() => go(id)}>{label}</button>
          ))}
        </div>
      </nav>

      {/* ---------- overview ---------- */}
      <section className="section" id="ev-overview">
        <div className="wrap ev-two">
          <div>
            <div className="eyebrow">Purpose of the event</div>
            <h2 className="ev-h2">Why we are convening</h2>
            {EVENT.purpose.map((p) => <p key={p.slice(0, 20)} className="ev-body">{p}</p>)}
          </div>
          <aside className="panel ev-who">
            <h3>Who's in the room</h3>
            <ul>
              {EVENT.participants.map((p) => (
                <li key={p.label}><span className="lr-ic"><Icon name={p.icon} size={17} /></span>{p.label}</li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="wrap">
          <ol className="ev-flow" aria-label="How the day progresses">
            {EVENT.flow.map((f, i) => (
              <li key={f.title}>
                <span className="ev-flow-n">{i + 1}</span>
                <div>
                  <b>{f.title}</b>
                  <span>{f.text}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- programme ---------- */}
      <section className="section dim" id="ev-programme">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Program structure · {EVENT.dateShort}</div>
              <h2>The day at a glance</h2>
              <p>{sessions.length} sessions from 9:45 to 17:15, with registration from 9:00. Every session lists its focus and the points from the detailed agenda.</p>
            </div>
            <button className="btn btn-line btn-sm" onClick={downloadICS}><Icon name="📥" size={15} /> Add to calendar</button>
          </div>

          <ol className="ev-timeline">
            {PROGRAM.map((s) => {
              const isNow = st.current && st.current.start === s.start;
              if (s.kind === 'break') {
                return (
                  <li key={s.start} className={`ev-row brk${isNow ? ' now' : ''}`}>
                    <time>{s.time}</time>
                    <div className="ev-card brk"><Icon name={s.title.startsWith('Lunch') ? '🍽' : s.title.startsWith('Reg') ? '📝' : '💧'} size={16} /> {s.title}{isNow && <span className="ev-now">Now</span>}</div>
                  </li>
                );
              }
              return (
                <li key={s.start} className={`ev-row${isNow ? ' now' : ''}`}>
                  <time>{s.time}</time>
                  <article className="ev-card">
                    <header>
                      <span className="ev-no">{s.no}</span>
                      <div>
                        <h3>{s.title}{isNow && <span className="ev-now">Now</span>}</h3>
                        {s.subtitle && <span className="ev-sub">{s.subtitle}</span>}
                      </div>
                    </header>
                    <p className="ev-focus">{s.focus}</p>
                    <ul className="ev-points">
                      {s.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ---------- outcomes ---------- */}
      <section className="section" id="ev-outcomes">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Expected outcomes</div>
              <h2>What the convening will produce</h2>
              <p>{OUTCOMES_INTRO}</p>
            </div>
          </div>
          <div className="ev-outcomes">
            {OUTCOMES.map((o) => (
              <div key={o.title} className="ev-outcome">
                <span className="lr-ic"><Icon name={o.icon} size={19} /></span>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap ev-end">
          <div>
            <h3>Read up before you come</h3>
            <p>The India Fisheries Handbook covers the systems discussed at the convening, from hatcheries and biofloc to solar-powered RAS.</p>
          </div>
          <div className="ev-end-actions">
            <Link to="/handbook" className="btn btn-pond"><Icon name="📖" size={16} /> Open the Handbook</Link>
            <Link to="/solar" className="btn btn-line"><Icon name="☀" size={16} /> Solar solutions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
