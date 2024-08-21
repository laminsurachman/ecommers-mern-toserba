import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import DetailProduct from "./pages/product/DetailProduct";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/:name" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
