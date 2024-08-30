import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import DetailProduct from "./pages/product/DetailProduct";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/users/Profile";
import Order from "./pages/users/order/Orders";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import UserPage from "./pages/admin/users/UserPage";
import ProductsPage from "./pages/admin/products/ProductsPage";
import OrdersPage from "./pages/admin/orders/OrdersPage";
import ReportPage from "./pages/admin/report/ReportPage";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/signup/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />{" "}
        <Route path="/daftar" element={<SignupPage />} />{" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/:name" element={<DetailProduct />} />{" "}
        <Route path="/cart" element={<Cart />} />{" "}
        <Route path="/profile" element={<Profile />} />{" "}
        <Route path="/order" element={<Order />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-pelanggan" element={<UserPage />} />{" "}
        <Route path="/admin-produk" element={<ProductsPage />} />{" "}
        <Route path="/admin-pesanan" element={<OrdersPage />} />{" "}
        <Route path="/admin-laporan" element={<ReportPage />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
