import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Box } from "@mui/material";
import Products from "../product/Products";

const Home = () => {
  return (
    <>
      <Navbar />{" "}
      <Box
        sx={{
          minHeight: 700,
          m: 2,
          display: "flex",

          alignContent: "flex-start",
          justifyContent: "center",
        }}
      >
        <Products />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
