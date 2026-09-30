import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { SaveButton, useApp } from '../components/AppState.jsx';
import { CHAPTERS, SPECIES } from '../data/jal.js';
import { PageHead } from './Layout.jsx';
import { ChapterArt } from './media.jsx';
import { ValueChainStrip, SpeciesCard } from './Home.jsx';

const pages = (ch) => (ch.sourcePages[1] ? `pp. ${ch.sourcePages[0]}–${ch.sourcePages[1]}` : `p. ${ch.sourcePages[0]}`);

export function ChapterCard({ ch, save = false }) {
  return (
    <Link className="card" to={`/chapter/${ch.id}`}>
      <div className="thumb"><ChapterArt ch={ch} /></div>
      <div className="body">
        <span className="tag" style={{ background: ch.color + '22', color: ch.color }}>Chapter {ch.num}</span>
        <h3>{ch.title}</h3>
        <p className="desc">{ch.summary}</p>
        {save && (
          <div className="meta-row">
            <span className="chip page">{pages(ch)}</span>
            <SaveButton id={ch.id} type="chapter" />
          </div>
        )}
      </div>
    </Link>
  );
}

export default function Explore() {
  return (
    <>
      <PageHead back="Back to Home" eyebrow="Explore the Handbook" title="Value Chain & Chapters" lede="Navigate through the complete fisheries value chain — from hatchery to market." />
      <section className="section">
        <div className="wrap">
          <ValueChainStrip />
          <div className="grid cols-3" style={{ marginTop: 32 }}>
            {CHAPTERS.map((ch) => <ChapterCard key={ch.id} ch={ch} save />)}
          </div>
        </div>
      </section>
    </>
  );
}

export function Chapter() {
  const { id } = useParams();
  const { toast, openModal } = useApp();
  const [level, setLevel] = useState('quick');
  const ch = CHAPTERS.find((c) => c.id === id);
  if (!ch) return <div className="wrap section"><div className="empty">Chapter not found.</div></div>;

  const related = SPECIES.filter((s) => ch.sourcePages.some((p) => s.sourcePages.includes(p))).slice(0, 4);

  const readAloud = () => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(ch.title + '. ' + ch.quickView);
      u.rate = 0.9;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
      toast('Reading aloud...');
    } else toast('Text-to-speech not supported in this browser');
  };

  const showSource = () =>
    openModal(
      <>
        <h3>Chapter {ch.num}</h3>
        <p className="muted" style={{ marginBottom: 12 }}>This content is extracted from the Fisheries Handbook developed for SELCO Foundation.</p>
        <div className="callout"><b>Source</b>All technical data, specifications, and recommendations in this section are sourced directly from the original handbook. Page references are provided for verification.</div>
        <p className="muted" style={{ marginTop: 12, fontSize: '.84rem' }}><strong>Content QA:</strong> Minor formatting variations may exist due to PDF text extraction. Critical values should be verified against the original document.</p>
      </>
    );

  return (
    <>
      <div className="page-head dark" style={{ background: `linear-gradient(150deg, ${ch.color}, color-mix(in srgb, ${ch.color} 55%, #041210))` }}>
        <div className="wrap">
          <Link className="back-link" to="/explore"><Icon name="back" size={16} /> Back to Explore</Link>
          <div className="eyebrow">Chapter {ch.num} · <span className="mono">{pages(ch)}</span></div>
          <h1>{ch.title}</h1>
          <p className="lede">{ch.summary}</p>
          <div className="head-actions">
            <button className="btn btn-solar btn-sm" onClick={readAloud}><Icon name="🔊" size={15} /> Listen</button>
            <SaveButton id={ch.id} type="chapter" />
            <button className="btn btn-ghost-light btn-sm" onClick={showSource}><Icon name="📄" size={15} /> View Source</button>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="seg" role="tablist">
            {[['quick', 'Quick View'], ['steps', 'Step-by-Step'], ['detail', 'Technical Detail']].map(([k, l]) => (
              <button key={k} role="tab" aria-selected={level === k} className={level === k ? 'active' : ''} onClick={() => setLevel(k)}>{l}</button>
            ))}
          </div>

          {level === 'quick' && (
            <div className="callout" style={{ fontSize: '1rem', lineHeight: 1.7, maxWidth: '80ch' }}><b>Quick View</b>{ch.quickView}</div>
          )}

          {level === 'steps' && (
            <>
              <h3 className="sub-head" style={{ marginTop: 4 }}>Sections in this Chapter</h3>
              <div className="numbered">
                {ch.sections.map((s, i) => (
                  <div className="num-item" key={s}>
                    <span className="nn">{i + 1}</span>
                    <div>
                      <b>{s}</b>
                      {ch.sections_detail && ch.sections_detail[i]
                        ? <p>{ch.sections_detail[i]}</p>
                        : <p className="mono" style={{ color: 'var(--ink-faint)' }}>Chapter {ch.num}, pages {ch.sourcePages[0]}-{ch.sourcePages[1]}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {level === 'detail' && (
            <div className="stack">
              <div className="callout cost"><b>Source Reference</b>This chapter covers pages {ch.sourcePages[0]}-{ch.sourcePages[1]} of the India Fisheries Handbook. All technical specifications, dosages, and recommendations are sourced from the field-validated handbook published by the Government of India.</div>
              <div className="callout">
                <b>Key Sections</b>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 }}>
                  {ch.sections.map((s) => <span key={s} className="chip" style={{ background: 'var(--surface)', color: 'var(--pond)', fontWeight: 600 }}>{s}</span>)}
                </div>
              </div>
              <p style={{ color: 'var(--ink-soft)', fontSize: '.92rem' }}><strong style={{ color: 'var(--ink)' }}>Related Systems</strong> For farming systems related to this chapter, visit the <Link to="/explore" style={{ fontWeight: 600 }}>Explore</Link> section.</p>
            </div>
          )}

          {related.length > 0 && (
            <>
              <h3 className="sub-head">Related Species</h3>
              <div className="grid cols-4">
                {related.map((s) => <SpeciesCard key={s.id} sp={s} />)}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
