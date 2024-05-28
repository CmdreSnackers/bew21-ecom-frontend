import { useState } from "react";
import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  TextField,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import Header from "../../components/Header";
import { addProduct } from "../../utils/api_products";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { getCategories } from "../../utils/api_categories";

export default function ProductAddNew() {
  const navigate = useNavigate();
  const [cookies] = useCookies(["currentUser"]);
  const { currentUser = {} } = cookies;
  const { token } = currentUser;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  //setup mutation for add new product
  const addNewMutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      //if API call is success, do what?
      // console.log("success");
      navigate("/");
    },
    onError: (e) => {
      //if API call is error, do what?
      // console.log(e);
      alert(e.response.data.message);
    },
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // trigger the mutation to call the API
    addNewMutation.mutate({
      name: name,
      description: description,
      price: price,
      category: category,
      token: token,
    });
  };

  return (
    <Container>
      <Header />
      <Card sx={{ marginTop: "100px" }}>
        <CardContent>
          <Typography
            variant="h3"
            sx={{
              margin: "20px 0",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Add New Product
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Price"
                variant="outlined"
                fullWidth
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                sx={{ marginTop: "10px", width: "200px", marginLeft: "10px" }}
              >
                <InputLabel id="product-select-label">Category</InputLabel>
                <Select
                  labelId="product-select-label"
                  id="product-select"
                  label="Category"
                  value={category}
                  onChange={(event) => {
                    setCategory(event.target.value);
                  }}
                >
                  {categories.map((category) => {
                    return (
                      <MenuItem key={category._id} value={category._id}>
                        {category.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth onClick={handleFormSubmit}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
