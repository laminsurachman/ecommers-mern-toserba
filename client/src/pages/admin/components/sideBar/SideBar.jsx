import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Menus } from "./Menus";
import LogoutIcon from "@mui/icons-material/Logout";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <Box sx={{ width: 200, padding: 1 }}>
      <List>
        {Menus.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.label}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon sx={{ color: blue[800] }} />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
        </ListItem>{" "}
      </List>
    </Box>
  );
};

export default SideBar;
