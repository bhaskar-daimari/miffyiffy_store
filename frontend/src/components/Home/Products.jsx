
import bouquet from '../../assets/bouquet.jpg';
import phonecharm1 from '../../assets/phonecharm1.jpg';
import frog from '../../assets/frog.jpg';
import bracelet2 from '../../assets/bracelet2.jpg';
import neckchain1 from '../../assets/neckchain1.jpg';
import bagcharm from '../../assets/bagcharm.jpg';
import './Products.css';

export default function Products() {
  const products = [
    { name: "bouquet", img: bouquet, id: "bouquet" },
    { name: "phonecharm", img: phonecharm1, id:"phonecharm" },
    { name: "keychain", img: frog, id: "keychain" },
    { name: "bracelet", img: bracelet2, id: "bracelet" },
    { name: "neckchain", img: neckchain1, id: "neckchain" },
    { name: "bagcharm", img: bagcharm, id:"bagcharm" }
  ];

  return (
    <section className="products">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product, i) => (
          <div key={i} className="product-card">
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
