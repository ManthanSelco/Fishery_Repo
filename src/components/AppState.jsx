import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';

/* localStorage helpers — same keys as the original pages so existing browser data carries over. */
export function readLS(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw == null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}
export function writeLS(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable — keep working in memory */
  }
}

export function usePersistent(key, initial) {
  const [value, setValue] = useState(() => readLS(key, initial));
  useEffect(() => writeLS(key, value), [key, value]);
  return [value, setValue];
}

const Ctx = createContext(null);
export const useApp = () => useContext(Ctx);

export function AppProvider({ children }) {
  const [toastMsg, setToastMsg] = useState(null);
  const [modal, setModal] = useState(null);
  const [saved, setSaved] = usePersistent('jp_saved', []);
  const [lowBand, setLowBand] = usePersistent('jp_lowband', false);
  const timer = useRef();
  const { pathname } = useLocation();

  // a popup never outlives the page it was opened on
  useLayoutEffect(() => setModal(null), [pathname]);

  const toast = useCallback((msg) => {
    setToastMsg(msg);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToastMsg(null), 2500);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('lowband', !!lowBand);
  }, [lowBand]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setModal(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isSaved = (id) => saved.some((s) => s.id === id);
  const toggleSave = (id, type) => {
    if (isSaved(id)) {
      setSaved(saved.filter((s) => s.id !== id));
      toast('Removed from saved');
    } else {
      setSaved([...saved, { id, type, date: Date.now() }]);
      toast('Saved!');
    }
  };
  const toggleLowBand = () => {
    const next = !lowBand;
    setLowBand(next);
    toast(next ? 'Low-bandwidth mode ON' : 'Low-bandwidth mode OFF');
  };

  return (
    <Ctx.Provider value={{ toast, openModal: setModal, closeModal: () => setModal(null), saved, isSaved, toggleSave, lowBand, toggleLowBand }}>
      {children}
      {modal && (
        <div className="modal-backdrop" onClick={(e) => e.target === e.currentTarget && setModal(null)}>
          <div className="modal" role="dialog" aria-modal="true">
            <button className="icon-btn close-x" onClick={() => setModal(null)} aria-label="Close">
              <Icon name="✕" size={16} />
            </button>
            {modal}
          </div>
        </div>
      )}
      {toastMsg && <div className="toast" role="status">{toastMsg}</div>}
    </Ctx.Provider>
  );
}

export function SaveButton({ id, type }) {
  const { isSaved, toggleSave } = useApp();
  const s = isSaved(id);
  return (
    <button
      className={`save-btn${s ? ' saved' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        toggleSave(id, type);
      }}
    >
      <Icon name="🔖" size={14} /> {s ? 'Saved' : 'Save'}
    </button>
  );
}
