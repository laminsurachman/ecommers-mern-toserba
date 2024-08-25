import { Box, Button, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import SelectOption from "./SelectOption";
import { useState } from "react";
const Order = () => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [courier, setCourier] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");

  // useEffect(() => {
  //   console.log(province, city, courier, service, address);
  // }, [province, city, courier, service, address]);
  return (
    <Box
      sx={{
        width: "80%",
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        height: "670px",
        boxShadow: 4,
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Atur Jumlah
      </Typography>{" "}
      <Box sx={{ display: "flex", gap: "15px", padding: "5px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "15px",

            padding: "2px",
          }}
        >
          {" "}
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            1
          </Box>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>Total Stock : 30</Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize={14}>
          Subtotal
        </Typography>
        <Typography fontWeight="bold">Rp 3.000.000 </Typography>
      </Box>
      <Typography fontWeight="bold">Alamat Pengiriman</Typography>
      <Box>
        <SelectOption
          provinsi={(p) => {
            setProvince(p);
          }}
          kota={(c) => {
            setCity(c);
          }}
          kurir={(k) => {
            setCourier(k);
          }}
          layanan={(l) => {
            setService(l);
          }}
          alamat={(a) => {
            setAddress(a);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize={14}>
          Ongkir
        </Typography>
        <Typography fontWeight="bold">Rp 3.000.000 </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        <Typography fontWeight="bold" fontSize={14}>
          total
        </Typography>
        <Typography fontWeight="bold">Rp 3.000.000 </Typography>
      </Box>
      <Button variant="contained"> Beli </Button>
    </Box>
  );
};

export default Order;
