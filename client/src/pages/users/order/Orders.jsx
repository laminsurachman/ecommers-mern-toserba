import { Box } from "@mui/material";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import ListOrder from "./ListOrder";

const Order = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ height: "680px", padding: "20px" }}>
        <ListOrder />
      </Box>
      <Footer />
    </Box>
  );
};

export default Order;
