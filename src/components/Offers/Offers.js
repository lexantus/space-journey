import './Offers.scss';
import data from './data.json';

function Offer({ data }) {
  return (
    <div className={`offer ${data.bg.cls}`}>
      <div className="offer-content">
        <h1>{data.h.t}</h1>
        <p>{data.p.t}</p>
        <button className="button__outline">{data.a.t}</button>
      </div>
    </div>
  );
}

function Offers() {
  return (
    <section className="offers-section">
      <h2>{data.h.t}</h2>
      <div className="offers-grid">
        {data.offers.map(offer => <Offer key={offer.id} data={offer} />)}
      </div>
    </section>
  );
}

export default Offers;
