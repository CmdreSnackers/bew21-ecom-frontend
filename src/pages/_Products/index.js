import { useState } from "react";
import Header from "../../components/Header";
import {
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Container,
} from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../utils/api_categories";
import { getProducts } from "../../utils/api_products";

export default function Products() {
  const [category, setCategory] = useState("all");
  // load the categories
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  // load the products
  const { data: products = [] } = useQuery({
    queryKey: ["products", category],
    queryFn: () => getProducts(category),
  });

  return (
    <Container>
      <Header />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            marginLeft: "10px",
            marginTop: "10px",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Products
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginLeft: "auto",
            marginRight: "10px",
            marginTop: "10px",
            backgroundColor: "#1BA930",
          }}
        >
          Add New
        </Button>
      </div>
      <FormControl
        sx={{ marginTop: "10px", width: "200px", marginLeft: "10px" }}
      >
        <InputLabel id="product-select-label">Product</InputLabel>
        <Select
          labelId="product-select-label"
          id="product-select"
          label="Product"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        >
          <MenuItem value="all">All</MenuItem>
          {categories.map((category) => {
            return (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} md={6} lg={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
