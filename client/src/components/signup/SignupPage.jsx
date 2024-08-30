import { Box, Button, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
const SignupPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: 600,
          width: 1000,
          borderRadius: 5,
          boxShadow: 5,
          p: 1,
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: 1,
            alignItems: "center",
          }}
        >
          <img
            src="https://img.freepik.com/free-vector/seasonal-sale-discounts-presents-purchase-visiting-boutiques-luxury-shopping-price-reduction-promotional-coupons-special-holiday-offers-vector-isolated-concept-metaphor-illustration_335657-2766.jpg"
            alt="daftar"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Box>
        <Box sx={{ flex: 1, p: 4 }}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: 4,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Registrasi
            </Typography>
            <Typography variant="body2">
              * Kami menjaga data anda, No Handphone digunakan untuk
              mengkonfirmasi pengiriman barang
            </Typography>
            <TextField
              fullWidth
              label="Name"
              placeholder="Masukkan Nama"
              name="name"
              type="text"
            ></TextField>
            <TextField
              fullWidth
              label="Email"
              placeholder="Masukkan Email"
              name="email"
              type="text"
            ></TextField>
            <TextField
              fullWidth
              label="Password"
              placeholder="Masukkan Password"
              name="password"
              type="text"
            ></TextField>
            <TextField
              fullWidth
              label="No Handphone"
              placeholder="No Handphone"
              name="no_hp"
              type="text"
            ></TextField>

            <Button variant="contained" color="success">
              Daftar
            </Button>
            <Typography align="center">Atau Login dengan</Typography>
            <Button
              variant="contained"
              color="error"
              startIcon={<GoogleIcon />}
            >
              Google
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupPage;
