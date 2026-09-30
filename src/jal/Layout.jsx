import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { useApp } from '../components/AppState.jsx';

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/event', label: 'Event' },
  { to: '/explore', label: 'Explore' },
  { to: '/species', label: 'Species' },
  { to: '/tools', label: 'Tools' },
  { to: '/records', label: 'Records' },
  { to: '/solar', label: 'Solar' },
  { to: '/glossary', label: 'Glossary' },
];

const BOTTOM = [
  { to: '/', label: 'Home', icon: 'home', end: true },
  { to: '/event', label: 'Event', icon: 'calendar' },
  { to: '/explore', label: 'Explore', icon: 'compass' },
  { to: '/tools', label: 'Tools', icon: 'wrench' },
  { to: '/records', label: 'Records', icon: 'clipboard' },
];

export default function Layout() {
  const { lowBand, toggleLowBand, toast } = useApp();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [q, setQ] = useState('');
  const inputRef = useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => { setMenuOpen(false); setSearchOpen(false); }, [pathname]);
  useEffect(() => { if (searchOpen) setTimeout(() => inputRef.current?.focus(), 30); }, [searchOpen]);

  const submit = (e) => {
    e.preventDefault();
    if (q.trim().length < 2) {
      toast('Type at least 2 characters');
      return;
    }
    navigate(`/search?q=${encodeURIComponent(q.trim())}`);
    setSearchOpen(false);
  };

  return (
    <div className="jp-shell">
      <header className="jp-top">
        <div className="wrap jp-top-inner">
          <Link to="/" className="brand" aria-label="Jal Pathways home">
            <span className="brand-mark"><Icon name="🐟" size={18} strokeWidth={2} /></span>
            Jal Pathways
          </Link>

          <nav className="jp-nav" aria-label="Main">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end}>{n.label}</NavLink>
            ))}
          </nav>

          <div className="jp-actions">
            <button className={`tb-icon${searchOpen ? ' on' : ''}`} onClick={() => setSearchOpen(!searchOpen)} aria-label="Search" title="Search">
              <Icon name={searchOpen ? '✕' : '🔍'} size={18} strokeWidth={2} />
            </button>
            <Link className="tb-icon" to="/saved" aria-label="Saved items" title="Saved"><Icon name="🔖" size={18} strokeWidth={2} /></Link>
            <button className={`tb-icon${lowBand ? ' on' : ''}`} onClick={toggleLowBand} aria-label="Toggle low-bandwidth mode" title="Low-bandwidth mode">
              <Icon name="bolt" size={18} strokeWidth={2} />
            </button>
            <Link className="hb-cta" to="/handbook" title="India Fisheries Handbook">
              <Icon name="📖" size={17} strokeWidth={2} />
              <span className="hb-cta-t">Handbook</span>
            </Link>
            <button className="tb-icon tb-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
              <Icon name={menuOpen ? '✕' : 'menu'} size={20} strokeWidth={2} />
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="tb-search">
            <form className="wrap" onSubmit={submit} role="search">
              <Icon name="🔍" size={18} />
              <input
                ref={inputRef}
                id="jp-search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
                placeholder="Search species, systems, symptoms…"
                aria-label="Search"
              />
              <button type="submit" className="btn btn-pond btn-sm">Search</button>
            </form>
          </div>
        )}

        {menuOpen && (
          <nav className="tb-drawer" aria-label="Main menu">
            <div className="wrap">
              {NAV.map((n) => (
                <NavLink key={n.to} to={n.to} end={n.end}>{n.label}</NavLink>
              ))}
              <NavLink to="/saved">Saved</NavLink>
            </div>
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <div className="lowband-badge"><Icon name="bolt" size={14} strokeWidth={2} /> Low-bandwidth mode on</div>

      <nav className="bottom-nav" aria-label="Quick">
        <div className="row">
          {BOTTOM.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end}>
              <Icon name={n.icon} size={21} strokeWidth={2} />
              {n.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}

export function PageHead({ back, backTo = '/', eyebrow, title, lede, variant, children }) {
  const navigate = useNavigate();
  return (
    <div className={`page-head${variant ? ' ' + variant : ''}`}>
      <div className="wrap">
        {back && (
          <button className="back-link" onClick={() => navigate(backTo)}>
            <Icon name="back" size={16} /> {back}
          </button>
        )}
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </div>
  );
}
