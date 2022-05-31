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
        <Toolbar sx={{color:"red",backgroundColor:"#febd01"}}>
         
         <Tabs textColor="" value={0} indicatorColor="sec">
            <Button  ><Link to="/"  style={{color:"black", textDecoration:"none", fontSize:"20px"}} >MY SHOP</Link></Button>
           <Button variant="auto" ><Link to="/Home"style={{color:"black", textDecoration:"none", fontSize:"16px"}}>Home</Link></Button>
           <Button variant="auto"><Link to="/Men" style={{color:"black", textDecoration:"none", fontSize:"16px"}}>Men</Link></Button>
       
           <Button><Link to="/Women" color="inherit" style={{color:"black", textDecoration:"none", fontSize:"16px"}}>Women</Link>
           </Button>
           <Button><Link to="/Electronics" color="inherit" style={{color:"black", textDecoration:"none", fontSize:"16px"}}>Home Applince</Link>
           </Button>
         </Tabs>
         
         <Button sx={{marginLeft:"50%"}}><Link style={{textDecoration:"none",color:"black",float:"right"}} to="/Home/signUp" color="inherit">SignUP</Link></Button>
         <Button ><Link style={{textDecoration:"none",color:"black"}} to="/Home/signIn" color="inherit">Login</Link></Button>
          <span><Link style={{textDecoration:"none",color:"black",float:"right"}} to="/home/products/cart" color="inherit"  sx={{textDecoration:"none"}}><AddShoppingCartIcon/>{numberOfItem}</Link></span> 
        </Toolbar>
      </AppBar>
    </Box>
        </React.Fragment>
    )
}
export default Header