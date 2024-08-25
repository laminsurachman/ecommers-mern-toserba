import { Box, Typography, IconButton } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Order from "./Order";
const product = {
  _id: {
    $oid: "6566c165801e99be12650c13",
  },
  name: "Rodrick Schwant",
  image: [
    {
      link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
    },
    {
      link: "http://dummyimage.com/650x650.png/ff4444/ffffff",
    },
    {
      link: "http://dummyimage.com/650x650.png/dddddd/000000",
    },
    {
      link: "http://dummyimage.com/650x650.png/5fa2dd/ffffff",
    },
    {
      link: "http://dummyimage.com/650x650.png/dddddd/000000",
    },
  ],
  desc: '<p><span style="color: rgb(33, 33, 33);">Infinix INBOOK X2</span></p><p><span style="color: rgb(33, 33, 33);">Color : Grey, Blue, Red</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Perfect Style, Amazing Display</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Processor : Intel® Core™ i7-1065G7 Processor 8M Cache, up to 3.90 GHz</span></p><p><span style="color: rgb(33, 33, 33);">• Memory : 8GB DDR4</span></p><p><span style="color: rgb(33, 33, 33);">• Storage : SSD 512GB M.2 NVMe PCIe 3.0</span></p><p><span style="color: rgb(33, 33, 33);">• Operating System : Windows 11 Home</span></p><p><span style="color: rgb(33, 33, 33);">• Display : 14" FHD (1920*1080) IPS 300 nits, Colour Gamut100% sRGB, Viewing Angle178 degrees</span></p><p><span style="color: rgb(33, 33, 33);">• Graphics : Intel® Iris® Plus Graphics</span></p><p><span style="color: rgb(33, 33, 33);">• Battery : 50 Wh</span></p><p><span style="color: rgb(33, 33, 33);">• Wi-Fi : IEEE 802.11a/b/g/n/ac,160MHz 2.4GHz and 5GHz</span></p><p><span style="color: rgb(33, 33, 33);">• Bluetooth : BT 5.1</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Ports :</span></p><p><span style="color: rgb(33, 33, 33);">USB-C x 1 (Data, Charging and DisplayPort)</span></p><p><span style="color: rgb(33, 33, 33);">USB-C x 1 (Data)</span></p><p><span style="color: rgb(33, 33, 33);">USB 3.0 × 2</span></p><p><span style="color: rgb(33, 33, 33);">HDMI 1.4 × 1</span></p><p><span style="color: rgb(33, 33, 33);">SD card slot x 1</span></p><p><span style="color: rgb(33, 33, 33);">3.5 mm Headset and Microphone Jack x 1</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• Keyboard : Full-size Backlit Chiclet Keyboard</span></p><p><span style="color: rgb(33, 33, 33);">• Touchpad : Touchpad with Multi-touch</span></p><p><span style="color: rgb(33, 33, 33);">• Camera : Dual-Star light HD Video Camera</span></p><p><span style="color: rgb(33, 33, 33);">• Audio : Dual DTS audio processing</span></p><p><span style="color: rgb(33, 33, 33);">• Microphone : Microphone x 2</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">• In The Box :</span></p><p><span style="color: rgb(33, 33, 33);">Inbook X2</span></p><p><span style="color: rgb(33, 33, 33);">45W USB-C Power Adapter</span></p><p><span style="color: rgb(33, 33, 33);">USB-C Charger Cable</span></p><p><span style="color: rgb(33, 33, 33);">Quick Start Guide</span></p><p><span style="color: rgb(33, 33, 33);">Warranty Card</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Case : Aluminium Alloy</span></p><p><br></p><p><span style="color: rgb(33, 33, 33);">Garansi Resmi Infinix Indonesia 2 Tahun</span></p>',
  category: "Grocery",
  price: 6562674,
  capital: 6552674,
  profit: 10000,
  stock: 10,
  weight: 1708,
  rating: 4,
  reviews: [
    {
      user: "64aa82aba176b956ba8982c1",
      rating: 5,
      comment:
        "Revision of Extraluminal Device in Ureter, Percutaneous Endoscopic Approach",
    },
    {
      user: "64aa82aba176b956ba898250",
      rating: 3,
      comment:
        "Supplement Right Brachial Artery with Nonautologous Tissue Substitute, Percutaneous Endoscopic Approach",
    },
  ],
};
const Cart = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ margin: "30px" }}>
        <Typography variant="h6" fontWeight={"bold"}>
          Keranjang Belanja
        </Typography>

        <Box sx={{ display: "flex", minHeight: "85%" }}>
          <Box sx={{ flex: 2, display: "flex", padding: "20px", gap: "10px" }}>
            <img
              src="{product.image[0].link}"
              alt=""
              style={{
                height: "120px",
                width: "120px",
                alignItems: "center",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "85%",
                gap: "10px",
              }}
            >
              <Typography fontWeight={"bold"}>{product.name}</Typography>
              <Typography
                fontWeight={"bold"}
              >{`Rp ${product.price}`}</Typography>
              <Typography>{product.weight}</Typography>{" "}
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  padding: "5px",
                  justifyContent: "end",
                }}
              >
                {" "}
                <IconButton>
                  <DeleteIcon />
                </IconButton>
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
              </Box>
            </Box>{" "}
          </Box>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Order />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
