import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

export default function SignUp() {
 const [state ,setState] = React.useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
 })

 const navigate=useNavigate()
 const handlechange =(e)=>{
     const {id , value} = e.target
     setState({...state ,[id]:value})
 }
 console.log(state)
 
    const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`https://ecommrcebackend.herokuapp.com/register`,state).then((res)=>
    {
       console.log(res.data);
       alert("Register Successfully");
       navigate("Home/signIn")
    }).catch((e)=>
    {
     alert("Registation Failed ")
    })
    
  };

  return (
    <ThemeProvider theme={theme}>
        <Header />
      <Container component="main" maxWidth="xs" sx={{border:"1px solid black", borderRadius:"5px",marginTop:"20px"}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
          <Typography component="h1" variant="h5" sx={{border:"1px solid black" ,borderRadius:"50%", padding:"10px"}}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handlechange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>

  );
}