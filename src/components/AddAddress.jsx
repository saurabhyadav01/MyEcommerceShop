import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";

import { useDispatch } from "react-redux";
import { setAddress,Post_Adderss } from "../redux/actions/addressAction";

const theme = createTheme();

export default function Address() {
  const dispatch=useDispatch();
  

  const [state, setState] = React.useState({
    address: "",
    city: "",
    firstName: "",
    lastName: "",
    lendmark: "",
    mobile: "",
    pin: "",
    state: ""


  });

  const handlechange = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(Post_Adderss(state))
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
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
          <Typography>
              <h3>ADDRESS</h3>
            </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handlechange}
                />
              </Grid>
         
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile"
                  name="mobile"
                  
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="address"
                  name="address"
                  
                  onChange={handlechange}
                />
              </Grid>
             
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lendmark"
                  label="Land Mark"
                  name="landmark"
                  
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="pin"
                  label="Pin Code"
                  name="pin"
                  
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  label="state"
                  name="state"
                  
                  onChange={handlechange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Add Address
            </Button>
           
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </React.Fragment>
  );
}
