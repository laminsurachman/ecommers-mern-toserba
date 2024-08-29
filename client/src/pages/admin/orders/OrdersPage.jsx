import { Box, Input } from "@mui/material";
import AdminBar from "../components/Appbar/AdminBar";
import OrderTable from "./OrderTable";
const OrdersPage = () => {
  return (
    <Box sx={{ height: "100vh", p: 2 }}>
      <AdminBar />
      <Box>
        <Input placeholder="Cari Pesanan" sx={{ p: 1 }} />
      </Box>
      <Box sx={{ p: 2 }}>
        <OrderTable />
      </Box>
    </Box>
  );
};

export default OrdersPage;
