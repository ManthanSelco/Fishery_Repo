import Icon from '../components/Icon.jsx';

const img = (name) => `${import.meta.env.BASE_URL}images/${name}.jpg`;

/* Real photos (same set the original embedded). Species without a photo get a coloured tile. */
const PHOTO_IDS = ['catla', 'rohu', 'mrigal', 'grass_carp', 'silver_carp', 'common_carp', 'tilapia', 'pangasius', 'magur', 'murrel', 'pabda', 'kawai', 'singhi', 'mola'];
export const speciesPhoto = (id) => (PHOTO_IDS.includes(id) ? img('sp-' + id) : null);
export const photo = img;

export const SPECIES_COLORS = {
  catla: ['#1c8c8c', '#fff'], rohu: ['#0e4f56', '#fff'], mrigal: ['#5c8a3a', '#fff'],
  grass_carp: ['#3f8f5f', '#fff'], silver_carp: ['#4a9aaa', '#fff'], common_carp: ['#c85a2e', '#fff'],
  pangasius: ['#0a3a40', '#fff'], tilapia: ['#f0a824', '#222'], pacu: ['#7a4a96', '#fff'],
  magur: ['#222', '#f0a824'], murrel: ['#1a1a2e', '#fff'], pabda: ['#c0432f', '#fff'],
  singhi: ['#333', '#5c8a3a'], kawai: ['#0e4f56', '#fff'], mola: ['#f0a824', '#222'],
  puthi: ['#1c8c8c', '#fff'], trout: ['#4a9aaa', '#fff'], mahseer: ['#f0a824', '#222'],
  guppy: ['#e87ca0', '#fff'], swordtail: ['#c0432f', '#fff'], goldfish: ['#f0a824', '#222'],
  angelfish: ['#7a4a96', '#fff'], betta: ['#9b1b6a', '#fff'], discus: ['#c85a2e', '#fff'],
  chital: ['#5c8a3a', '#fff'], reba: ['#1c8c8c', '#fff'], bata: ['#0e4f56', '#fff'],
};

const gradient = (c) => `linear-gradient(135deg, ${c} 0%, color-mix(in srgb, ${c} 70%, #000) 100%)`;

export function SpeciesArt({ sp, large = false }) {
  const src = speciesPhoto(sp.id);
  if (src) return <img src={src} alt={sp.common} loading="lazy" />;
  const [bg, fg] = SPECIES_COLORS[sp.img] || ['#0e4f56', '#fff'];
  const initials = sp.common.split(' ').map((w) => w[0]).join('').substring(0, 2);
  return (
    <div className="tile-art" style={{ background: gradient(bg), color: fg }} role="img" aria-label={sp.common}>
      <span className="tile-label">{large ? sp.common : initials}</span>
      <Icon name={sp.category === 'Ornamental' ? '🐠' : '🐟'} size={large ? 44 : 30} className="tile-ic" />
    </div>
  );
}

export function ChapterArt({ ch }) {
  return (
    <div className="tile-art" style={{ background: gradient(ch.color) }}>
      <span className="big-n">{String(ch.num).padStart(2, '0')}</span>
      <Icon name={ch.icon} size={34} className="tile-ic" />
    </div>
  );
}

export function IconArt({ icon, color, fg = '#fff', label }) {
  return (
    <div className="tile-art" style={{ background: gradient(color), color: fg }}>
      <span className="tile-label" style={{ fontSize: '1.15rem', maxWidth: '75%', lineHeight: 1.15 }}>{label}</span>
      <Icon name={icon} size={36} className="tile-ic" />
    </div>
  );
}

export const tagClass = (cat) =>
  cat === 'IMC' ? 't-production'
  : cat === 'High Value' ? 't-health'
  : cat === 'SIS' ? 't-water'
  : cat === 'Ornamental' ? 't-energy'
  : 't-markets';

export const SYS_TO_CH = { pond: 'ch3', cage: 'ch8', biofloc: 'ch9', ras: 'ch10', aquaponics: 'ch17', cold_water: 'ch13', ornamental: 'ch16', integrated: 'ch18' };
