import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Login_Request } from "../redux/actions/loginActions";

const theme = createTheme();

export default function SignIn() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlechange = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  console.log(state);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(Login_Request(state, navigate));
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          border: "1px solid black",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              border: "1px solid black",
              borderRadius: "50%",
              padding: "10px",
            }}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handlechange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              onChange={handlechange}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,backgroundColor: "#ffd84d ",color:"black"}}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="signUp" variant="body2"  style={{color:"black",textDecoration:"none",fontSize:"16px"}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
