import './Discover.scss';
import data from './data.json';

function Discover() {
  return (
    <section className="discover-section">
      <div className="discover-section-content">
        <h1>{data.h1.t}<mark className="mark-1">{data.h1.mark.t}</mark></h1>
        <p>{data.p.t}<mark className="mark-2">{data.p.mark.t}</mark></p>
        <button class="button">{data.button.t}</button>
      </div>
    </section>
  );
}

export default Discover;

