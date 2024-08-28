import { Box, Input } from "@mui/material";
import AdminBar from "../components/Appbar/AdminBar";
import UsersTable from "./UsersTable";

const UserPage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <AdminBar />
      <Box sx={{ p: 2 }}>
        <Input placeholder="Cari Pelanggan" sx={{ p: 1 }} />
      </Box>
      <Box sx={{ p: 2 }}>
        <UsersTable />
      </Box>
    </Box>
  );
};

export default UserPage;
