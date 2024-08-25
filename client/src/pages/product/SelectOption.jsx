import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";

const SelectOption = ({ provinsi, kota, kurir, layanan, alamat }) => {
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [courier, setCourier] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");
  const handleChangePropinsi = (event) => {
    setProvince(event.target.value);
    provinsi(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
    kota(event.target.value);
  };
  const handleChangeCourier = (event) => {
    setCourier(event.target.value);
    kurir(event.target.value);
  };
  const handleChangeService = (event) => {
    setService(event.target.value);
    layanan(event.target.value);
  };

  useEffect(() => {
    alamat(address);
  }, [address, alamat]);

  return (
    <Box
      sx={{
        minWidth: 120,
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Propinsi</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={province}
          label="Provinsi"
          onChange={handleChangePropinsi}
        >
          <MenuItem value="Jawa Barat">Jawa Barat</MenuItem>
          <MenuItem value="Jawa Timur">Jawa Timur</MenuItem>
          <MenuItem value="Lampung">Lampung</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Kota/Kabupaten</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Kota/Kabupaten"
          onChange={handleChangeCity}
        >
          <MenuItem value="Bandung">Bandung</MenuItem>
          <MenuItem value="Garut">Garut</MenuItem>
          <MenuItem value="Kotabumi">Kotabumi</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Kurir</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={courier}
          label="Kurir"
          onChange={handleChangeCourier}
        >
          <MenuItem value="JNE">JNE</MenuItem>
          <MenuItem value="tiki">tiki</MenuItem>
          <MenuItem value="POS">POS</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Layanan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={service}
          label="Layanan"
          onChange={handleChangeService}
        >
          <MenuItem value="Layanan1">Layanan1</MenuItem>
          <MenuItem value="Layanan2">Layanan2</MenuItem>
          <MenuItem value="Layanan3">Layanan3</MenuItem>
        </Select>
      </FormControl>

      <textarea
        placeholder="Masukan Alamat"
        style={{ padding: "10px" }}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </Box>
  );
};
export default SelectOption;
