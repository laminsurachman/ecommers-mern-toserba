import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import DetailProduct from "./pages/product/DetailProduct";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/users/Profile";
import Order from "./pages/users/order/Orders";
import Dashboard from "./pages/admin/dashboard/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/:name" element={<DetailProduct />} />{" "}
        <Route path="/cart" element={<Cart />} />{" "}
        <Route path="/profile" element={<Profile />} />{" "}
        <Route path="/order" element={<Order />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
