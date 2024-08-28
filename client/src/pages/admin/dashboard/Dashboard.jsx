import AdminBar from "../components/Appbar/AdminBar";

import { Box } from "@mui/material";
import Data from "./data";
import Transactions from "./Transactions";
const Dashboard = () => {
  return (
    <>
      <AdminBar />
      <Box
        sx={{
          height: "calc(100vh - 100px)",
          padding: "20px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Data />
        <Transactions />
      </Box>
    </>
  );
};

export default Dashboard;
