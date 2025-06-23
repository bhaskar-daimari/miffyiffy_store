
import './Header.css';
import swirl from '../../assets/swirl.png';
import miffy from '../../assets/miffy.png';
import strawberry from '../../assets/strawberry.png';
import star from '../../assets/star.png';

export default function Header() {
  return (
    <header className="container">
      {/* Decorative Images from Assets */}
      <img className="img top-left" src={swirl} alt="swirl" />
      <img className="img top-right" src={miffy} alt="bunny" />
      <img className="img middle-left" src={strawberry} alt="strawberry" />
      <img className="img middle-right" src={star} alt="star" />

      {/* Header Text */}
      <h1>miffyiffy_store</h1>
      <p>welcome &lt;3</p>
      <p>shop now!!</p>
    </header>
  );
}


