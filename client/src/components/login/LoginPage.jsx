import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toSignup = () => navigate("/daftar");

  const handleLogin = () => {
    alert(`email : ${email}   password : ${password}`);
  };
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
          height: 550,
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
            src="https://static.vecteezy.com/system/resources/thumbnails/005/638/554/small_2x/illustration-isometric-concept-putting-shopping-items-in-online-cart-free-vector.jpg"
            alt=""
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box sx={{ flex: 1, p: 4 }}>
          <Typography variant="h6" fontWeight="bold">
            Login
          </Typography>
          <Typography>
            Belum punya Akun?{" "}
            <span onClick={toSignup} style={{ cursor: "pointer" }}>
              Daftar
            </span>
          </Typography>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              marginTop: 10,
            }}
            onSubmit={handleLogin}
          >
            <TextField
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></TextField>
            <TextField
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></TextField>
            <Button variant="contained" color="success" type="submit">
              Login
            </Button>
            <Typography align="center">atau Login Dengan</Typography>
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

export default LoginPage;
