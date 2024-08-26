import { Box, Button, TextField } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { Fragment } from "react";
const Profile = () => {
  return (
    <Fragment>
      <Navbar />
      <Box
        sx={{
          height: "calc(100vh - 70px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            height: "700px",
            width: "880px",
            borderRadius: "10px",
            boxShadow: 4,
          }}
        >
          {/*Bacground*/}
          <Box
            sx={{
              height: "35%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              boxShadow: 4,
            }}
          >
            {" "}
            <img
              src="https://teropongmedia.id/wp-content/uploads/2023/02/debuter-ecommerce-2-1024x536-1.jpg"
              alt="background"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "0",
                margin: "auto",
                bottom: "0",
                height: "150px",
                width: "150px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid white",
              }}
            >
              Avatar
            </Box>
          </Box>
          <Box
            sx={{
              height: "65%",
              p: 1,
            }}
          >
            <TextField fullWidth label="Nama Lengkap" sx={{ mb: 2 }} />{" "}
            <TextField fullWidth label="email@gmail.com" sx={{ mb: 2 }} />{" "}
            <TextField fullWidth label="Nomor Telephone" sx={{ mb: 2 }} />{" "}
            <TextField fullWidth label="Password lama" sx={{ mb: 2 }} />{" "}
            <TextField fullWidth label="Password Baru" sx={{ mb: 2 }} />
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
              <Button variant="outlined" color="secondary">
                Update Phassword
              </Button>
              <Button variant="outlined" color="error">
                Update Profile
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Profile;
