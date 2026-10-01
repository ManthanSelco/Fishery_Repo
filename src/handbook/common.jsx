/* Small pieces shared by every Handbook section. */

export const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

export function SecHead({ no, title, desc }) {
  return (
    <div className="hb-sec-head">
      <span className="no">{no}</span>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}
