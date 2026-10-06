import { useEffect, useRef } from 'react';
import { GEO } from '../data/indiaGeo.js';

/* Climate Resilient Fisheries: where we work.
   Ported from Climate_Resilient_Fisheries__where_we_work.html — same states, places and work.
   The map is drawn imperatively (as in the original) inside this component's own DOM. */

const STATES = {
  'Maharashtra': { c: '#E5A03A', side: 'L', y: 398, places: ['Gadchiroli'], work: ['Pond culture'] },
  'Karnataka': { c: '#DE5A4A', side: 'L', y: 560, places: ['Udupi'], work: ['Pearl culture', 'Fish vending'] },
  'Telangana': { c: '#8F64C8', side: 'L', y: 478, places: ['Hyderabad'], work: ['Live fish vending'] },
  'Andhra Pradesh': { c: '#2E93CF', side: 'R', y: 575, places: ['West Godavari'], work: ['Shrimp culture', 'Murrel culture', 'Crab fattening'] },
  'Odisha': { c: '#E5772E', side: 'R', y: 495, places: ['Puri', 'Khordha'], work: ['Biofloc units', 'RAS unit', 'Pond culture'] },
  'Jharkhand': { c: '#5FA040', side: 'R', y: 425, places: ['Hazaribagh', 'Giridih', 'Jamshedpur'], work: ['Biofloc units', 'RAS unit', 'Live fish transport', 'Pond culture'] },
  'Assam': { c: '#CC4A8A', side: 'R', y: 238, places: ['Kamrup', 'Morigaon', 'Nagaon', 'Sonitpur'], work: ['End to end value chain, from hatchery to fish drying'] },
  'Meghalaya': { c: '#25A398', side: 'R', y: 300, places: ['East Khasi Hills'], work: ['Trout culture'] },
  'Mizoram': { c: '#A9A32E', side: 'R', y: 362, places: [], placeText: 'Upper Mizoram and the rest of Mizoram', work: ['Champion fish farmers Kima and Samuel run their own hatcheries and sell fish in nearby districts'] },
  'Nagaland': { c: '#4F63C4', side: 'R', y: 180, places: ['Dimapur'], work: ['Biofloc units (being set up)', 'Fish feed mill (being set up)'] },
};
const ORDER = ['Maharashtra', 'Karnataka', 'Telangana', 'Andhra Pradesh', 'Odisha', 'Jharkhand', 'Assam', 'Meghalaya', 'Mizoram', 'Nagaland'];
const SITE_DIR = {
  Gadchiroli: 'r', Udupi: 'r', Hyderabad: 'r', 'West Godavari': 'r', Puri: 'r', Khordha: 'l', Hazaribagh: 'l', Giridih: 'r', Jamshedpur: 'r',
  Kamrup: 'l', Morigaon: 'b', Nagaon: 'r', Sonitpur: 'r', 'East Khasi Hills': 'b', Dimapur: 'r',
};
const NS = 'http://www.w3.org/2000/svg';

function mountMap(root) {
  const $ = (s) => root.querySelector(s);
  const svg = $('.ww-map'), card = $('.ww-mapcard'), chips = $('.ww-chips'), panel = $('.ww-panel');
  const gStates = $('.ww-states'), gC = $('.ww-callouts'), gS = $('.ww-sites'), fishes = $('.ww-fishes');
  const el = (t, a = {}, p) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); if (p) p.appendChild(e); return e; };
  const FULL = matchMedia('(max-width:640px)').matches ? { x: 160, y: 0, w: 640, h: 720 } : { x: 0, y: 0, w: 1010, h: 720 };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let vb = { ...FULL }, active = null, anim = null;
  const paths = {};
  const cleanups = [];
  const on = (t, ev, fn) => { t.addEventListener(ev, fn); cleanups.push(() => t.removeEventListener(ev, fn)); };
  const activate = (t, fn) => {
    on(t, 'click', fn);
    on(t, 'keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } });
  };
  const hlState = (n, v) => paths[n] && paths[n].classList.toggle('hl', v);

  // states
  for (const [name, s] of Object.entries(GEO.states)) {
    const isOn = !!STATES[name];
    const p = el('path', { d: s.d, class: 'ww-st' + (isOn ? ' on' : '') }, gStates);
    if (isOn) {
      p.style.fill = STATES[name].c;
      p.setAttribute('tabindex', '0'); p.setAttribute('role', 'button'); p.setAttribute('aria-label', name + ': show fisheries work');
      activate(p, () => select(name));
      on(p, 'mouseenter', () => hlState(name, true)); on(p, 'mouseleave', () => hlState(name, false));
      paths[name] = p;
    } else {
      el('title', {}, p).textContent = name;
    }
  }
  ORDER.forEach((n) => gStates.appendChild(paths[n]));

  // fish in the seas
  [[640, 470, 60, -14, 9], [700, 560, -50, 10, 11], [620, 620, 70, 6, 13], [230, 560, 40, 18, 10], [280, 640, -55, -8, 12], [180, 470, 30, -12, 14]].forEach(([x, y, dx, dy, t]) => {
    const g = el('g', { transform: `translate(${x},${y}) scale(${dx < 0 ? -0.85 : 0.85},0.85)` }, fishes);
    const inner = el('g', { class: 'ww-swim' }, g);
    inner.style.setProperty('--dx', Math.abs(dx) + 'px'); inner.style.setProperty('--dy', dy + 'px'); inner.style.setProperty('--t', t + 's');
    el('use', { href: '#ww-fishshape', class: 'ww-fish' }, inner);
  });

  // callouts with arrows
  ORDER.forEach((name, i) => {
    const s = STATES[name], [tx, ty] = GEO.targets[name];
    const g = el('g', { class: 'ww-callout', tabindex: '0', role: 'button', 'aria-label': name + ': show fisheries work' }, gC);
    g.style.setProperty('--dl', (0.25 + i * 0.08) + 's');
    const txt = el('text', { y: s.y + 5.5 }, g); txt.textContent = name;
    const tw = txt.getComputedTextLength ? txt.getComputedTextLength() || name.length * 8 : name.length * 8;
    const w = tw + 40, h = 32;
    const x0 = s.side === 'L' ? Math.max(6, 160 - w) : Math.min(850, 1004 - w); // keep long labels inside the map
    const r = el('rect', { x: x0, y: s.y - h / 2, width: w, height: h, rx: 16 }, g); r.style.stroke = s.c;
    g.insertBefore(r, txt);
    el('circle', { cx: x0 + 16, cy: s.y, r: 6.5, fill: s.c }, g);
    txt.setAttribute('x', x0 + 29);
    const sx = s.side === 'L' ? x0 + w : x0, sy = s.y;
    const dx = tx - sx, dy = ty - sy, len = Math.hypot(dx, dy);
    const ex = tx - (dx / len) * 3, ey = ty - (dy / len) * 3;
    const nx = -dy / len, ny = dx / len, bend = (s.side === 'L' ? -1 : 1) * 0.16 * len;
    const cx = (sx + ex) / 2 + nx * bend, cy = (sy + ey) / 2 + ny * bend;
    const dPath = `M${sx},${sy}Q${cx},${cy} ${ex},${ey}`;
    const cas = el('path', { class: 'ww-arrow casing', d: dPath }, gC);
    const a = el('path', { class: 'ww-arrow', d: dPath }, gC);
    a.style.stroke = s.c;
    const L = a.getTotalLength();
    [cas, a].forEach((q) => { q.style.setProperty('--dl', (0.25 + i * 0.08) + 's'); q.style.setProperty('--len', L); });
    const p1 = a.getPointAtLength(L - 14), ang = Math.atan2(ey - p1.y, ex - p1.x), H = 15;
    const hd = el('path', { d: `M${tx},${ty}L${tx - H * Math.cos(ang - 0.45)},${ty - H * Math.sin(ang - 0.45)}L${tx - H * Math.cos(ang + 0.45)},${ty - H * Math.sin(ang + 0.45)}Z`, class: 'ww-callout ww-head' }, gC);
    hd.style.fill = s.c; hd.style.setProperty('--dl', (1.0 + i * 0.08) + 's'); hd.style.cursor = 'default';
    gC.appendChild(g);
    activate(g, () => select(name));
    on(g, 'mouseenter', () => hlState(name, true)); on(g, 'mouseleave', () => hlState(name, false));
  });

  // chips
  ORDER.forEach((name) => {
    const b = document.createElement('button'); b.className = 'ww-chip'; b.type = 'button'; b.setAttribute('aria-pressed', 'false');
    const dot = document.createElement('i'); dot.style.background = STATES[name].c;
    b.append(dot, name); b.dataset.state = name;
    on(b, 'click', () => (active === name ? reset() : select(name)));
    chips.appendChild(b);
  });

  $('.ww-outline').setAttribute('d', GEO.outline || '');

  // sites
  function scaleSites() {
    const k = vb.w / (svg.clientWidth || 1010);
    gS.querySelectorAll('.ww-site').forEach((g) => g.setAttribute('transform', `translate(${g.dataset.x},${g.dataset.y}) scale(${k})`));
  }
  function drawSites(name) {
    gS.innerHTML = '';
    if (!name) return;
    STATES[name].places.forEach((pl, i) => {
      const [x, y] = GEO.sites[pl];
      const g = el('g', { class: 'ww-site', 'data-site': pl }, gS); g.dataset.x = x; g.dataset.y = y;
      const ring = el('circle', { class: 'ww-ring', r: 7 }, g); ring.style.stroke = 'var(--ww-ink)'; ring.style.animationDelay = i * 0.35 + 's';
      el('circle', { class: 'ww-dot', r: 7 }, g);
      const d = SITE_DIR[pl] || 'r', t = el('text', {}, g); t.textContent = pl;
      if (d === 'r') { t.setAttribute('x', 13); t.setAttribute('y', 5); }
      else if (d === 'l') { t.setAttribute('x', -13); t.setAttribute('y', 5); t.setAttribute('text-anchor', 'end'); }
      else { t.setAttribute('x', 0); t.setAttribute('y', 26); t.setAttribute('text-anchor', 'middle'); }
    });
    scaleSites();
  }

  function setVB(v) { vb = v; svg.setAttribute('viewBox', `${v.x} ${v.y} ${v.w} ${v.h}`); scaleSites(); }
  function animateTo(t) {
    cancelAnimationFrame(anim);
    const s = { ...vb }, t0 = performance.now(), dur = reduce ? 0 : 700;
    const step = (now) => {
      const p = dur ? Math.min(1, (now - t0) / dur) : 1, e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      setVB({ x: s.x + (t.x - s.x) * e, y: s.y + (t.y - s.y) * e, w: s.w + (t.w - s.w) * e, h: s.h + (t.h - s.h) * e });
      if (p < 1) anim = requestAnimationFrame(step);
    };
    anim = requestAnimationFrame(step);
  }
  function boxFor(name) {
    const [x0, y0, x1, y1] = GEO.states[name].bb, AR = FULL.w / FULL.h;
    let w = Math.max(x1 - x0, (y1 - y0) * AR) * 1.4; w = Math.max(w, 130); const h = w / AR;
    return { x: (x0 + x1) / 2 - w / 2, y: (y0 + y1) / 2 - h / 2, w, h };
  }

  // panel (built with DOM nodes, no innerHTML)
  const mk = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  function overview() {
    panel.replaceChildren(mk('h3', 'ww-title', 'Where we work'), mk('p', 'ww-lead', 'Click a state to see what we do there.'));
    ORDER.forEach((n) => {
      const s = STATES[n];
      const row = mk('button', 'ww-row'); row.type = 'button';
      const dot = mk('i'); dot.style.background = s.c;
      const span = mk('span'); span.append(mk('b', null, n), document.createElement('br'), s.places.length ? s.places.join(', ') : s.placeText);
      row.append(dot, span);
      row.addEventListener('click', () => select(n));
      panel.appendChild(row);
    });
  }
  function showState(name) {
    const s = STATES[name];
    const bar = mk('div', 'ww-bar'); bar.style.background = s.c;
    const where = mk('ul', 'ww-where');
    if (s.places.length) {
      s.places.forEach((p) => {
        const li = mk('li'); li.dataset.site = p; li.append(mk('span', 'ww-pin'), p);
        const g = () => gS.querySelector(`.ww-site[data-site="${p}"]`);
        li.addEventListener('mouseenter', () => g()?.classList.add('hl'));
        li.addEventListener('mouseleave', () => g()?.classList.remove('hl'));
        where.appendChild(li);
      });
    } else {
      where.appendChild(mk('li', 'plain', s.placeText));
    }
    const work = mk('ul', 'ww-work'); s.work.forEach((w) => work.appendChild(mk('li', null, w)));
    panel.replaceChildren(bar, mk('h3', 'ww-title', name), mk('h4', 'ww-sub', 'Where'), where, mk('h4', 'ww-sub', 'What we do'), work);
    panel.scrollTop = 0;
  }
  function select(name) {
    if (active) paths[active].classList.remove('active');
    active = name; paths[name].classList.add('active'); card.classList.add('zoomed');
    chips.querySelectorAll('.ww-chip').forEach((c) => c.setAttribute('aria-pressed', c.dataset.state === name));
    drawSites(name); animateTo(boxFor(name)); showState(name);
  }
  function reset() {
    if (active) paths[active].classList.remove('active');
    active = null; card.classList.remove('zoomed'); drawSites(null); animateTo(FULL); overview();
    chips.querySelectorAll('.ww-chip').forEach((c) => c.setAttribute('aria-pressed', 'false'));
  }
  on($('.ww-back'), 'click', reset);
  on(document, 'keydown', (e) => { if (e.key === 'Escape' && active) reset(); });
  on(window, 'resize', scaleSites);
  setVB(FULL);
  overview();

  return () => {
    cancelAnimationFrame(anim);
    cleanups.forEach((f) => f());
    [gStates, gC, gS, fishes, chips, panel].forEach((n) => n.replaceChildren());
  };
}

export default function WhereWeWork() {
  const ref = useRef(null);
  useEffect(() => mountMap(ref.current), []);

  return (
    <section className="section ww" id="where-we-work" ref={ref}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">Where We Work</div>
            <h2>Climate Resilient Fisheries</h2>
            <p>Where SELCO Foundation works on fisheries and climate resilient aquaculture. Click a state to see where we work in it and what we do there.</p>
          </div>
        </div>
        <div className="ww-layout">
          <div>
            <div className="ww-mapcard">
              <svg className="ww-map" viewBox="0 0 1010 720" role="img" aria-label="Map of India with ten fisheries states highlighted">
                <defs>
                  <g id="ww-fishshape"><path d="M0 0c6-6 17-6 24 0c-7 6-18 6-24 0z" /><path d="M23 0l9-6v12z" /></g>
                </defs>
                <g className="ww-fishes" aria-hidden="true" />
                <g className="ww-states" />
                <path className="ww-outline" />
                <g className="ww-callouts" />
                <g className="ww-sites" />
              </svg>
              <button className="ww-back" type="button">Back to India map</button>
            </div>
            <div className="ww-chips" aria-label="States" />
          </div>
          <aside className="ww-panel" aria-live="polite" />
        </div>
      </div>
    </section>
  );
}
