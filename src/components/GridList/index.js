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

export default function GridList(props) {
  const {
    cards = [],
    categories = [],
    category = "",
    setCategory,
    sort,
    setSort,
  } = props;
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box sx={{ margin: "8px" }}>
          <Typography variant="h5" sx={{ marginBottom: "15px" }}>
            Products
          </Typography>
          <FormControl style={{ width: "300px" }}>
            <InputLabel id="product-label">All Products</InputLabel>
            <Select labelId="product-label" id="product-select" label="Name">
              <MenuItem>Name</MenuItem>
              <MenuItem>Price</MenuItem>
              <MenuItem>Category</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ margin: "8px" }}>
          <Button variant="contained" size="large" color="success">
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
            <Grid item xs={4}>
              <Card key={card._id}>
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
                  >
                    Add To Cart
                  </Button>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    sx={{ marginTop: "8px", marginBottom: "8px" }}
                  >
                    <Button variant="contained" color="secondary">
                      Edit
                    </Button>
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
