import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Input,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import products from "../../data/Products";
import { orange } from "@mui/material/colors";

const Products = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");

  // mencari product
  const searchFunction = (e) => {
    // setSearchTerm(e.target.value);
    const { name, value } = e.target;

    if (name === "search") {
      setSearchTerm(value);
    } else if (name === "category") {
      if (value === "all") {
        setCategoryTerm("");
      } else {
        setCategoryTerm(value);
      }
    }
  };
  const filtered = (product) => {
    const name = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    const category = product.category
      .toLowerCase()
      .includes(categoryTerm.toLowerCase());

    return name && category;
  };

  const filteredProducts = products.filter(filtered);
  // mencari product berdasarkan Category

  const categories = [...new Set(products.map((product) => product.category))];

  // pagination product
  const [page, setPage] = useState(1);
  const productsPerPage = 30;
  // page 1 = 0 sampai 29, page 2 = 30 sampai 59, page 3 = 60 sampai 89, dst

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const productsPaginated = filteredProducts.slice(startIndex, endIndex);
  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const changePage = (event, page) => {
    setPage(page);
  };

  const detailProductPage = (product) => {
    navigate(`${product}`);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          p: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Input
            placeholder="search ..."
            sx={{ p: 1 }}
            name="search"
            type="text"
            onChange={searchFunction}
            value={searchTerm}
          />

          <FormControl sx={{ width: 300 }}>
            <InputLabel>Category</InputLabel>
            <Select
              name="category"
              label="Category"
              value={searchTerm}
              onChange={searchFunction}
            >
              <MenuItem value="all">All Product</MenuItem>
              {categories.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
            m: 2,
          }}
        >
          {/*  dihapus Products * filtered products */}
          {productsPaginated.map((product) => (
            <Card
              key={product.name}
              sx={{
                width: 210,
                minheight: 280,
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => detailProductPage(product.name)}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={product.name}
                  image={product.image[0] ? product.image[0].link : null}
                  sx={{ minHeight: 200, objectFit: "cover" }}
                />
              </CardActionArea>
              <CardContent>
                <Typography>{product.name}</Typography>
                <Typography fontWeight={"bold"}>{`Rp ${parseFloat(
                  product.price
                ).toLocaleString("id-ID")}`}</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  {" "}
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    <StarRoundedIcon sx={{ color: orange[500] }} />
                    {product.rating}
                  </Typography>
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    stock : {product.stock}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          {" "}
          <Pagination
            count={pageCount || 1}
            page={page}
            onChange={changePage}
          />
        </Box>
      </Box>
    </>
  );
};

export default Products;
