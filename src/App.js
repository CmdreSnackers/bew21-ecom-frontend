import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductAddNew from "./pages/ProductAddNew";
import ProductEdit from "./pages/ProductEdit";
import { SnackbarProvider } from "notistack";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import PaymentVerify from "./pages/PaymentVerify";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { CookiesProvider } from "react-cookie";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider defaultSetOptions={{ path: "" }}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<ProductAddNew />} />
              <Route path="/products/:id" element={<ProductEdit />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/verify-payment" element={<PaymentVerify />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
