import { Box } from "@mui/material";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "60px",
        alignItems: "center",
      }}
    >
      &copy :Surachman {year}
    </Box>
  );
}

export default Footer;
