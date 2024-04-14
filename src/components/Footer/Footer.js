import './Footer.scss';
import imgRocket from './rocket.svg';
import data from './data.json';

function Footer() {
  return (
    <footer>
      <div className="rocket-img">
        <img src={imgRocket} alt="Rocket" />
      </div>
      <mark className="mark-2">{data.mark.t}</mark>
    </footer>
  );
}

export default Footer;
