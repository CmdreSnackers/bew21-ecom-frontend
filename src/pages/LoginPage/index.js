import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import Header from "../../components/Header";
import {
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { loginUser } from "../../utils/api_users";

export default function LoginPage() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log(data);
      enqueueSnackbar("Successfully logged-in", { variant: "success" });
    },
    onError: (error) => {
      enqueueSnackbar(error.response.data.message, { variant: "error" });
    },
  });

  const handleLogin = () => {
    if (email === "" || password === "") {
      enqueueSnackbar("All fields are required", { variant: "danger" });
    } else {
      loginMutation.mutate({
        email,
        password,
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <Header />
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Grid container spacing={3} sx={{ p: 2 }}>
            <Grid item xs={12}>
              <Typography>Email</Typography>
              <TextField
                required
                fullWidth
                variant="outlined"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Password</Typography>
              <TextField
                required
                fullWidth
                variant="outlined"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                style={{
                  textTransform: "capitalize",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
