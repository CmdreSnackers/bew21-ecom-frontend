import { Divider, Typography, Box, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { emptyCart } from "../../utils/_api_cart";

export default function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const { currentUser } = cookies;
  const location = useLocation();
  const navigate = useNavigate();

  console.log(cookies.currentUser);

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
  if (location.pathname === "/category") {
    pageTitle = "Create a New Account";
  }

  const handleLogout = () => {
    //remove current user cookie
    removeCookie("currentUser");
    //empty the cart
    emptyCart();
    //redirect to home page
    navigate("/login");
  };
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
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Button
            onClick={() => {
              navigate("/");
            }}
            style={{
              color: location.pathname === "/" ? "white" : "inherit",
              backgroundColor:
                location.pathname === "/" ? "#238be6" : "inherit",
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
              color: location.pathname === "/category" ? "white" : "inherit",
              backgroundColor:
                location.pathname === "/category" ? "#238be6" : "inherit",
            }}
            onClick={() => {
              navigate("/category");
            }}
          >
            Categories
          </Button>
        </Box>
        {currentUser ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span>Current User: {currentUser.name}</span>
            <Button
              style={{
                textTransform: "capitalize",
              }}
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex" }}>
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
        )}
      </Box>
      <Divider />
    </>
  );
}
