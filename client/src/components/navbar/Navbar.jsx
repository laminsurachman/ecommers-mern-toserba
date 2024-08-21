import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import LoginIcon from "@mui/icons-material/LoginOutlined";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";

function Navbar() {
  const user = "admin";
  const userMenu = ["Profile", "Orders", "Logout"];
  const adminMenu = ["Setting", "Dashboard", "Logout"];

  const [open, setOpen] = useState(null);

  const menuOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const menuClose = () => {
    setOpen(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src="/logo2.png"
            alt="logo"
            style={{ height: "100px", width: " 120px", objectFit: "contain" }}
          />
          <Box
            sx={{
              display: "flex",

              gap: "20px",
            }}
          >
            <IconButton color="inherit">
              {" "}
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
                  {userMenu.map((item) => (
                    <MenuItem onClick={menuClose} key={item}>
                      {item}
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
                  {adminMenu.map((item) => (
                    <MenuItem onClick={menuClose} key={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <IconButton color="inherit">
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
