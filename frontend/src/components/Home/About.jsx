
import './About.css';
import logo from '../../assets/logo.png'; 
import {motion} from "framer-motion";


export default function About() {
  return (
    <section className="about-container">
      <div className="logo-container">
        <img src={logo} alt="miffyiffy store logo" className="about-logo" />
      </div>
      <motion.div
        className="about-text"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      > <div className='atext'>
        <h2>About</h2>
        <p>
          Hi! I’m miffyiffy, the heart and hands behind this little shop of charm and crochet.
          What started as a hobby—making cute phone charms for friends and crafting colorful crochet bouquets during cozy evenings—
          quickly grew into something more: a place to share joy through handmade creations.
        </p>
        <p>
          Here, you’ll find a mix of sweet and playful phone charms, soft crochet bouquets perfect for gifts or decoration,
          and other small treasures that are made with love and a touch of whimsy.
        </p>
        <p>
          Each item is crafted with care, inspired by the little things that make life magical—
          whether it’s a pastel bead, a flower in full bloom, or the smile that comes with receiving something thoughtful.
        </p>
        <p>
          Thank you for stopping by and supporting handmade dreams.
          I hope my creations bring a bit of color and happiness to your day.
        </p>
        <p>With love, <br />miffyiffy_store🌸</p>
        </div>
      
      </motion.div>
    </section>
  );
}

