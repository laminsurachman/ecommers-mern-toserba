import { Box, IconButton, Input, Tooltip } from "@mui/material";
import AdminBar from "../components/Appbar/AdminBar";
import AddIcon from "@mui/icons-material/Add";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import { blue, orange, red } from "@mui/material/colors";
import Products from "./Products";
const ProductsPage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <AdminBar />
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Input placeholder="Cari Produk" sx={{ p: 1 }} />
        <Box sx={{ display: "flex", gap: 1 }}>
          <Tooltip title="Tambah">
            <IconButton>
              <AddIcon sx={{ color: blue[700] }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Upload">
            <IconButton>
              <DriveFolderUploadOutlinedIcon sx={{ color: orange[800] }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton>
              <FolderDeleteIcon sx={{ color: red[800] }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <Products />
      </Box>
    </Box>
  );
};

export default ProductsPage;
