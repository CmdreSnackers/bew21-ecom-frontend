import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../utils/api_products";
import { useSnackbar } from "notistack";
import { addToCart } from "../../utils/api_cart";

export default function GridList(props) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  const {
    cards = [],
    categories = [],
    category = "all",
    setCategory,
    sort,
    setSort,
    page,
    setPage,
  } = props;

  const addToCartMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      // display success message
      enqueueSnackbar("Product has been added to cart successfully.", {
        variant: "success",
      });
      // reset the cart data
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: (error) => {
      // display error message
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
      });
    },
  });

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      // display success message
      enqueueSnackbar("Product is deleted", {
        variant: "success",
      });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      // display error message
      enqueueSnackbar(error.response.data.message, {
        variant: "error",
      });
    },
  });

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box sx={{ margin: "8px" }}>
          <Typography variant="h5" sx={{ marginBottom: "15px" }}>
            Products
          </Typography>
          <FormControl style={{ width: "300px" }}>
            <InputLabel id="product-label">All Products</InputLabel>
            <Select
              labelId="product-label"
              id="product-select"
              label="Name"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
            >
              <MenuItem value="all">All Categories</MenuItem>
              {categories.map((category) => {
                return (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ margin: "8px" }}>
          <Button
            variant="contained"
            size="large"
            color="success"
            onClick={() => {
              navigate("/add");
            }}
          >
            Add New
          </Button>
        </Box>
      </Box>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cards.map((card) => (
            <Grid item xs={4} key={card._id}>
              <Card>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ marginTop: "8px", marginBottom: "8px" }}
                  >
                    {card.name}
                  </Typography>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    sx={{ marginTop: "8px", marginBottom: "8px" }}
                  >
                    <Chip label={card.price} color="success" />
                    <Chip label={card.category} color="warning" />
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ marginTop: "8px", marginBottom: "8px" }}
                    onClick={() => {
                      addToCartMutation.mutate(card);
                    }}
                  >
                    Add To Cart
                  </Button>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    sx={{ marginTop: "8px", marginBottom: "8px" }}
                  >
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ width: "100px" }}
                      onClick={() => {
                        navigate("/products/" + card._id);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ width: "100px" }}
                      onClick={() => {
                        const confirm = window.confirm(
                          "Are you sure you want to delete this product?"
                        );
                        if (confirm) {
                          deleteProductMutation.mutate(card._id);
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {cards.length === 0 ? (
            <Grid item xs={12}>
              <Typography align="center" sx={{ padding: "10px 0" }}>
                No items found.
              </Typography>
            </Grid>
          ) : null}
        </Grid>
      </Container>
    </>
  );
}
