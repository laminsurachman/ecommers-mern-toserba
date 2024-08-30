import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import PeopleIcon from "@mui/icons-material/People";
import { blue } from "@mui/material/colors";

export const Menus = [
  {
    label: "Home",
    link: "/",
    icon: <HomeWorkIcon sx={{ color: blue[800] }} />,
  },
  {
    label: "Dasboard",
    link: "/admin-dashboard",
    icon: <DashboardIcon sx={{ color: blue[800] }} />,
  },
  {
    label: "Pelanggan",
    link: "/admin-pelanggan",
    icon: <PeopleIcon sx={{ color: blue[800] }} />,
  },
  {
    label: "Product",
    link: "/admin-produk",
    icon: <LocalMallIcon sx={{ color: blue[800] }} />,
  },
  {
    label: "Pesanan",
    link: "/admin-pesanan",
    icon: <ShoppingCartIcon sx={{ color: blue[800] }} />,
  },
  {
    label: "Report",
    link: "/admin-laporan",
    icon: <AssessmentIcon sx={{ color: blue[800] }} />,
  },
];
