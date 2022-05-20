import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Tab } from "@mui/material";
import { Tabs } from "@mui/material";
import {Outlet,Link} from "react-router-dom"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

 const Header=()=>
{

  const [value,setValue]=useState();
  const arr=JSON.parse(localStorage.getItem("cartItem")) ||[];
  const  numberOfItem=arr.length
return (
        <React.Fragment>
      
       <Box sx={{ flexGrow: 2,color:"red" }}>
      <AppBar position="static"  >
        <Toolbar sx={{color:"red"}}>
         
         <Tabs textColor="" value={0} indicatorColor="sec" sx={{color:"red"}}>
            <Button  ><Link to="/"  style={{color:"black", textDecoration:"none", fontSize:"20px"}} >MY SHOP</Link></Button>
           <Button variant="auto" ><Link to="/Home"style={{color:"black", textDecoration:"none", fontSize:"20px"}}>Home</Link></Button>
           <Button variant="auto"><Link to="/Men" style={{color:"black", textDecoration:"none", fontSize:"20px"}}>Men</Link></Button>
       
           <Button><Link to="/Women" color="inherit" style={{color:"black", textDecoration:"none", fontSize:"20px"}}>Women</Link>
           </Button>
           <Button><Link to="/Electronics" color="inherit" style={{color:"black", textDecoration:"none", fontSize:"20px"}}>Electronics</Link>
           </Button>
         </Tabs>
         
         <Button sx={{marginLeft:"auto",textDecoration:"none"}} variant="contained"><Link to="/Home/signUp" color="inherit">SignUP</Link></Button>
         <Button variant="contained" sx={{marginLeft:2,textDecoration:"none"}}><Link to="/Home/signIn" color="inherit">Login</Link></Button>
          <span><Link to="/home/products/cart" color="inherit"><AddShoppingCartIcon/>{numberOfItem}</Link></span> 
        </Toolbar>
      </AppBar>
    </Box>
        </React.Fragment>
    )
}
export default Header