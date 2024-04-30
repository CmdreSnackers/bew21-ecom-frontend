import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{ color: "black", backgroundColor: "white", marginBottom: "8px" }}
    >
      <Toolbar>
        <Typography variant="h4" align="center" sx={{ flexGrow: 1 }}>
          Welcome to My Store
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
