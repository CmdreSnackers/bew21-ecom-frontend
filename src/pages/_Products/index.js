// import { useState } from "react";
// import Header from "../../components/Header";
// import {
//   Typography,
//   Divider,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Card,
//   CardContent,
//   Grid,
// } from "@mui/material";
// import Container from "@mui/material/Container";
// import { useQuery } from "@tanstack/react-query";
// import { getCategories } from "../../utils/api_categories";
// import { getProducts } from "../../utils/api_products";

// export default function Products() {
//   const [category, setCategory] = useState("all");
//   // load the categories
//   const { data: categories = [] } = useQuery({
//     queryKey: ["categories"],
//     queryFn: () => getCategories(),
//   });

//   // load the products
//   const { data: products = [] } = useQuery({
//     queryKey: ["products", category],
//     queryFn: () => getProducts(category),
//   });

//   return (
//     <Container>
//       <Header />
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <Typography
//           sx={{
//             marginLeft: "10px",
//             marginTop: "10px",
//             fontWeight: "bold",
//             fontSize: "24px",
//           }}
//         >
//           Products
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             marginLeft: "auto",
//             marginRight: "10px",
//             marginTop: "10px",
//             backgroundColor: "#1BA930",
//           }}
//         >
//           Add New
//         </Button>
//       </div>
//       <FormControl
//         sx={{ marginTop: "10px", width: "200px", marginLeft: "10px" }}
//       >
//         <InputLabel id="product-select-label">Product</InputLabel>
//         <Select
//           labelId="product-select-label"
//           id="product-select"
//           label="Product"
//           value={category}
//           onChange={(event) => {
//             setCategory(event.target.value);
//           }}
//         >
//           <MenuItem value="all">All</MenuItem>
//           {categories.map((category) => {
//             return (
//               <MenuItem key={category} value={category}>
//                 {category}
//               </MenuItem>
//             );
//           })}
//         </Select>
//       </FormControl>
//       <Grid container spacing={3}>
//         {data.map((product) => (
//           <Grid key={product.id} item xs={4}>
//             <Card>
//               <CardContent>
//                 <Typography fontWeight={"bold"}>{product.name}</Typography>
//                 <Box
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 0",
//                   }}
//                 >
//                   <Typography
//                     variant="p"
//                     style={{ backgroundColor: "#EBFBEE", color: "#6ACF7E" }}
//                   >
//                     {product.price}
//                   </Typography>
//                   <Typography
//                     variant="p"
//                     style={{ backgroundColor: "#FFF4E6", color: "#FD882B" }}
//                   >
//                     {product.category}
//                   </Typography>
//                 </Box>
//                 <Button fullWidth variant="contained" color="primary">
//                   Add To Cart
//                 </Button>
//                 <Box
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     margin: "10px 0",
//                   }}
//                 >
//                   <Button
//                     variant="contained"
//                     style={{ borderRadius: "17px" }}
//                     color="primary"
//                   >
//                     Edit
//                   </Button>
//                   <Button
//                     variant="contained"
//                     style={{ borderRadius: "17px" }}
//                     color="error"
//                   >
//                     Delete
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }
