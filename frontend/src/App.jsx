import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductCategory from "./components/ProductCategory";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<ProductCategory />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;