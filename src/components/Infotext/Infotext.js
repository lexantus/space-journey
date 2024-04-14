import './Infotext.scss';
import data from './data.json';

function Infotext() {
  return (
    <section class="infotext-section">
      <h2>{data.h.t}</h2>
      <p class="fade">{data.p.t}</p>
      <a class="ref" href={data.a.ref}>{data.a.t}</a>
    </section>
  );
}

export default Infotext;
