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

import {  sort_price_h_to_l , sort_price_l_to_h ,SORT_BY_WOMEN,SORT_NAME_ASS,SORT_NAME_DISS ,SORT_BY_MEN,SORT_RATING_L_TO_H,SORT_RATING_H_TO_L} from "../redux/actions/productActions";
import { lineHeight } from "@mui/system";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  //  console.log(products);
  const Dispatch = useDispatch()
  const [value, setValue] = React.useState("");
  const [categories, setCategories] = React.useState("");
  
  const handleChange = (event) => {

    setValue(event.target.value)

  if(event.target.value === "highToLow"){
    Dispatch(sort_price_l_to_h());
  } else if(event.target.value === "LowToHigh"){
 
    Dispatch(sort_price_h_to_l())
  }
  else if(event.target.value === "RatingLowToHigh"){
   
    Dispatch(SORT_RATING_H_TO_L())
  }else if(event.target.value === "RatingHighLow"){
    Dispatch(SORT_RATING_L_TO_H())
  }
  else if(event.target.value === "AtoZ"){
    Dispatch(SORT_NAME_DISS())
  }
  else if(event.target.value === "ZtoA"){
   
    Dispatch(SORT_NAME_ASS())
  }
  };

  // SORT_RATING_L_TO_H:"SORT_RATING_L_TO_H",
  // SORT_RATING_H_TO_L:"SORT_RATING_H_TO_L",
  // SORT_NAME_ASS:"SORT_NAME_ASS",
  // SORT_NAME_ASS:"SORT_NAME_DISS",
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
            value={value}
            label="SortByPrice"
            onChange={handleChange}
          >
            <MenuItem value={""}> </MenuItem>
            <MenuItem value={"highToLow"}>Low To High </MenuItem>
            <MenuItem value={"LowToHigh"}>HighTo Low</MenuItem>
            
            <MenuItem value={"RatingLowToHigh"}>High To Low Rating</MenuItem>
            <MenuItem value={"RatingHighLow"}>Low To High rating</MenuItem>
            <MenuItem value={"AtoZ"}>Diss Name</MenuItem>
            <MenuItem value={"ZtoA"}>Ass Name</MenuItem>
          </Select>
        </FormControl>
       
      </Box>
       <Box sx={{textAlign:"center", textDecoration:"none",color:"black" }}>
        <h2 sx={{color:"black",fontSize:"20px"}} onClick={ProductComponent} >All Products</h2>
        {/* <Button sx={{color:"black",fontSize:"20px"}} onClick={menProduct}>Men</Button>
        <Button sx={{color:"black",fontSize:"20px"}} onClick={womenProduct}>Women</Button> */}
       </Box>
       <hr></hr>
      <Grid container sx={{marginLeft:"auto" }}>
      
    

     {products.map((el)=>(
       
      <Link to={`products/${el._id}`} style={{textDecoration:"none"}}>
         <Card sx={{ maxWidth: 300 ,minWidth: 300 ,minHeight:480,margin:"20px",height:"400px", marginLeft:"50px"}}>
       <img src={el.image1} alt="" height="60%" width="95%" style={{marginLeft:"8px",marginTop:"5px"}}/>
       <CardContent>
         <Typography gutterBottom variant="h6" component="div" sx={{lineHeight:"20px"}}>
          {el.title}
         </Typography>
         <Typography variant="body2" color="text.secondary">
          Price: ₹{el.price}
         </Typography>
         <Typography variant="body2" color="text.secondary">
         Rating:{el.rating.rate}
         </Typography>
       </CardContent>
       <CardActions>
         <Button sx={{width:"100%",backgroundColor:"#ffd84d",height:"35px" ,fontSize:"20px",color:"black"}} variant="contained" size="small" onClick={()=>{
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
