import React from "react";
import Header from "./Home/Header";
import NavBar from "./Home/Navbar";
import Hero from "./Home/Hero";
import Products from "./Home/Products";
import About from "./Home/About";
import Footer from "./Home/Footer";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Header />
      <Hero />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default Home;