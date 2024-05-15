import { Divider, Typography, Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  let pageTitle = "Welcome to My Store";

  if (location.pathname === "/cart") {
    pageTitle = "My Cart";
  }
  if (location.pathname === "/orders") {
    pageTitle = "My Orders";
  }
  if (location.pathname === "/login") {
    pageTitle = "Login to your Account";
  }
  if (location.pathname === "/signup") {
    pageTitle = "Create a New Account";
  }
  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{
          textAlign: "center",
          marginTop: "20px",
          marginBottm: "20px",
          fontWeight: "bold",
          fontSize: "40px",
        }}
      >
        {pageTitle}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Button
          onClick={() => {
            navigate("/");
          }}
          style={{
            color: location.pathname === "/" ? "white" : "inherit",
            backgroundColor: location.pathname === "/" ? "#238be6" : "inherit",
          }}
        >
          Home
        </Button>
        <Button
          style={{
            color: location.pathname === "/cart" ? "white" : "inherit",
            backgroundColor:
              location.pathname === "/cart" ? "#238be6" : "inherit",
          }}
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart
        </Button>
        <Button
          style={{
            color: location.pathname === "/orders" ? "white" : "inherit",
            backgroundColor:
              location.pathname === "/orders" ? "#238be6" : "inherit",
          }}
          onClick={() => {
            navigate("/orders");
          }}
        >
          My Orders
        </Button>
        <Button
          style={{
            color: location.pathname === "/login" ? "white" : "inherit",
            backgroundColor:
              location.pathname === "/login" ? "#238be6" : "inherit",
          }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </Button>
        <Button
          style={{
            color: location.pathname === "/signup" ? "white" : "inherit",
            backgroundColor:
              location.pathname === "/signup" ? "#238be6" : "inherit",
          }}
          onClick={() => {
            navigate("/signup");
          }}
        >
          Signup
        </Button>
      </Box>
      <Divider />
    </>
  );
}
