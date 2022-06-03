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
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function Payments() {
  const navigate = useNavigate();
  const [card, setCard] = React.useState({
    name: "",
    cardNo: "",
    expiry: "",
    cvv: "",
  });

  const [carddata, setCarddata] = React.useState([]);
  const handlechange = (e) => {
    const { id, value } = e.target;
    setCard({ ...card, [id]: value });
  };
  const getData = () => {
    axios
      .get(`https://ecommrcebackend.herokuapp.com/payment`)
      .then((res) => {
        // console.log(res.data);
        setCarddata([...res.data]);
        // if(res.data.name== "saurabh")
        // {
        //   alert(" Successfully");
        // }
      })
      .catch((e) => {
        alert(" Failed ");
      });
  };

  React.useEffect(() => {
    getData();
  }, []);
  //console.log(card)

  const handleSubmit = (event) => {
    event.preventDefault();
    //  console.log(card.name)
    //  console.log(carddata[0]);

    if (
      card.name == "saurabh" &&
      card.cardNo == "14521456985214563" &&
      card.expiry == "12/23" &&
      card.cvv == "123"
    ) {
      let otp;
      const x = prompt("Enter");
      console.log(x);
      if (x == 1234) {
        navigate("/home/products/cart/payment/success");
      } else {
        alert("Invalid Card Details");
      }
    } else {
      alert("Please Enter Valid Card Details");
    }
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
              Pay
              a href="/home/products/cart/payment/success"> Pay</a> 
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
