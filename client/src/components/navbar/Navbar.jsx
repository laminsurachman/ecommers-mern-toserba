import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import LoginIcon from "@mui/icons-material/LoginOutlined";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = "";
  const userMenu = [
    {
      menu: "Profile",
      link: "/profile",
    },
    {
      menu: "Orders",
      link: "/order",
    },
  ];
  const adminMenu = [
    { menu: "setting", link: "/admin-setting" },
    { menu: "Dashboard", link: "/admin-dashboard" },
  ];

  const [open, setOpen] = useState(null);

  const menuOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const menuClose = () => {
    setOpen(null);
  };

  const toCart = () => {
    navigate("/cart");
  };

  const toHome = () => navigate("/");
  const toLoginPage = () => navigate("/login");

  const toPage = (link) => {
    navigate(link);
    menuClose();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ cursor: "pointer" }} onClick={toHome}>
            {" "}
            <img
              src="/logo2.png"
              alt="logo"
              style={{ height: "100px", width: " 120px", objectFit: "contain" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",

              gap: "20px",
            }}
          >
            <IconButton color="inherit" onClick={toCart}>
              <ShoppingCartCheckoutOutlinedIcon />
            </IconButton>
            {user === "user" ? (
              <>
                {" "}
                <IconButton color="inherit" onClick={menuOpen}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={open}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(open)}
                  onClose={menuClose}
                >
                  {userMenu.map((item, index) => (
                    <MenuItem
                      onClick={() => {
                        menuClose();
                        toPage(item.link);
                      }}
                      key={index}
                    >
                      {item.menu}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : user === "admin" ? (
              <>
                {" "}
                <IconButton color="inherit" onClick={menuOpen}>
                  <AccountCircleIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={open}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(open)}
                  onClose={menuClose}
                >
                  {adminMenu.map((item, index) => (
                    <MenuItem
                      onClick={() => {
                        menuClose();
                        toPage(item.link);
                      }}
                      key={index}
                    >
                      {item.menu}
                    </MenuItem>
                  ))}{" "}
                  <MenuItem>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <IconButton color="inherit" onClick={toLoginPage}>
                {" "}
                <LoginIcon />{" "}
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
