import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin"; // If you have this

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        {/* Optionally, add a default route */}
        <Route path="*" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;