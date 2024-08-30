import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SmsIcon from "@mui/icons-material/Sms";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { blue, yellow, red } from "@mui/material/colors";
const Products = () => {
  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        component="img"
        height={225}
        image="http://app1.jadidalmagribi.com/products/5c55cba8-a016-43c7-b3ec-f5f75f7c37b0-1701780388411-1724918856661.jpg"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography fontWeight={"bold"} fontSize={18} align="center">
            Kemeja
          </Typography>
          <Typography
            fontWeight={"bold"}
            fontSize={14}
            align="center"
            fontStyle={"italic"}
          >
            100.000
          </Typography>
          <Stack spacing={2}>
            <Rating name="read-only" value={5} readOnly />
          </Stack>
        </CardContent>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CardActions>
          <IconButton>
            <MoreVertIcon sx={{ color: blue[700] }} />
          </IconButton>
          <IconButton>
            <SmsIcon sx={{ color: yellow[700] }} />
          </IconButton>
          <IconButton>
            <CreateIcon sx={{ color: blue[700] }} />
          </IconButton>
          <IconButton>
            <DeleteIcon sx={{ color: red[700] }} />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default Products;
