import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductListing from "./ProductListing";
import MenComponent from "./WomenComponents";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

import {  sort_price_h_to_l , sort_price_l_to_h ,SORT_BY_WOMEN ,SORT_BY_MEN} from "../redux/actions/productActions";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  //  console.log(products);
  const Dispatch = useDispatch()
  const [price, setPrice] = React.useState("");
  const [categories, setCategories] = React.useState("");
  
  const handleChange = (event) => {

    setPrice(event.target.value)

  if(price === "highToLow"){
    Dispatch(sort_price_h_to_l())
  }if(price === "LowToHigh"){
    Dispatch(sort_price_l_to_h())
  }
  };
  

  const addToCart = (el) => {
    const arr = JSON.parse(localStorage.getItem("cartItem")) || [];
    arr.push(el);
    localStorage.setItem("cartItem", JSON.stringify(arr));

    console.log(arr);
  };
  
  // const menProduct=()=>
  // {
  //  Dispatch(SORT_BY_MEN ())
 
  // }

  // const womenProduct=()=>
  // {
  //   Dispatch(SORT_BY_WOMEN ())
  // }
  // const AllProduct=()=>
  // {
      
  // }


  // console.log(arr)
  return (
    <>

      <Box sx={{ minWidth: 200,display:"flex "}}>
        <FormControl
          sx={{ width: "200px", marginLeft: "50px", marginBottom: "1px",marginTop:"5px" }}
        >
          <InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={price}
            label="SortByPrice"
            onChange={handleChange}
          >
            <MenuItem value={"highToLow"}>Low To High </MenuItem>
            <MenuItem value={"LowToHigh"}>High To Low</MenuItem>
          </Select>
        </FormControl>
       
      </Box>
       {/* <Box sx={{textAlign:"center", textDecoration:"none",color:"black"}}>
        <Button sx={{color:"black",fontSize:"20px"}} onClick={ProductComponent} >All</Button>
        <Button sx={{color:"black",fontSize:"20px"}} onClick={menProduct}>Men</Button>
        <Button sx={{color:"black",fontSize:"20px"}} onClick={womenProduct}>Women</Button>
       </Box> */}
       <hr></hr>
      <Grid container sx={{marginLeft:"auto"}}>
      
    

     {products.map((el)=>(
       
      <Link to={`products/${el._id}`} style={{textDecoration:"none"}}>
         <Card sx={{ maxWidth: 280 ,minWidth: 280 ,margin:"20px",height:"400px", marginLeft:"50px"}}>
       <img src={el.image} alt="" height="40%" width="60%" style={{marginLeft:"50px"}}/>
       <CardContent>
         <Typography gutterBottom variant="h5" component="div">
          {el.title}
         </Typography>
         <Typography variant="body2" color="text.secondary">
          price: ${el.price}
         </Typography>
         <Typography variant="body2" color="text.secondary">
          Rating: {el.rating.rate}
         </Typography>
       </CardContent>
       <CardActions>
         <Button variant="contained" size="small" onClick={()=>{
           addToCart()
         }}>BUY NOW</Button>
         
       </CardActions>
     </Card>
      </Link>
      
     ))}
</Grid>


      <ProductListing />
    </>
  );
};

export default ProductComponent;
