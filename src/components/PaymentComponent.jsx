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

const theme = createTheme();


export default function Payments() {
 
  const [card, setCard] = React.useState({
    name: "",
    cardNo: "",
    expiry: "",
    cvv: "",
  });

  const handlechange = (e) => {
    const { id, value } = e.target;
    setCard({ ...card, [id]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(card)
    // axios.post(``,card)
    //   .then((res) => {
    //     console.log(res.data);
    //     alert(" Successfully");
    //   })
    //   .catch((e) => {
    //     alert(" Failed ");
        
    //   });
  };
  

  return (
    <ThemeProvider theme={theme}>
     
      
        <Container
          component=""
          maxWidth="xs"
          sx={{
            height: "400px",
            marginLeft: "0px",
            
            borderRadius: "5px",
            
          }}
        >
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Enter Card Details
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Card Holder Name"
                    name="name"
                    autoComplete="fullname"
                    onChange={handlechange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="cardNo"
                    label="Card Number"
                    min="16"
                    max="16"
                    name="carNo"
                    autoComplete=""
                    onChange={handlechange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="expiry"
                    required
                    fullWidth
                    id="expiry"
                    label="EXPIRY"
                    autoFocus
                    onChange={handlechange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="cvv"
                    required
                    fullWidth
                    id="cvv"
                    label="CVV"
                    autoFocus
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
                <a href="/home/products/cart/payment/success"> Pay</a>
              </Button>
             
             
            </Box>
          </Box>
        </Container>
   
    </ThemeProvider>
  );
}
