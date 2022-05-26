import React from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
import Footer from "./Footer";
import ProductListing from "./ProductListing";

import {  sort_price_h_to_l , sort_price_l_to_h ,SORT_BY_WOMEN,SORT_NAME_ASS,SORT_NAME_DISS ,SORT_BY_MEN,SORT_RATING_L_TO_H,SORT_RATING_H_TO_L} from "../redux/actions/productActions";

const  MenComponent=()=>
{
    const products =useSelector((state)=>state.allProducts.products);
    const Dispatch = useDispatch()
    const [value, setValue] = React.useState("");
    const [categories, setCategories] = React.useState("");
    
    const handleChange = (event) => {
  
      value(event.target.value)
  

    };
    
  const addToCart = (el) => {
    const arr = JSON.parse(localStorage.getItem("cartItem")) || [];
    arr.push(el);
    localStorage.setItem("cartItem", JSON.stringify(arr));

   // console.log(arr);
  };
  
  const menProduct=()=>
  {
   Dispatch(SORT_BY_MEN ())
 
  }

  const womenProduct=()=>
  {
    Dispatch(SORT_BY_WOMEN ())
  }
     //console.log(products);
 const mensData=products.filter((e)=>{
   return e.category=="men's clothing"
 })
 
 if(value === "highToLow"){
  Dispatch(sort_price_h_to_l())
}if(value === "LowToHigh"){
  Dispatch(sort_price_l_to_h())
}
if(value === "RatingLowToHigh"){
  Dispatch(SORT_RATING_L_TO_H())
}if(value === "RatingHighLow"){
  Dispatch(SORT_RATING_H_TO_L())
}
if(value === "AtoZ"){
  Dispatch(SORT_NAME_ASS())
}if(value === "ZtoA"){
  Dispatch(SORT_NAME_DISS())
}
return(
    <>
<Header />
   
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
           <MenuItem value={"highToLow"}>Low To High </MenuItem>
            <MenuItem value={"LowToHigh"}>High To Low</MenuItem>
            
            <MenuItem value={"RatingLowToHigh"}>High To Low Rating</MenuItem>
            <MenuItem value={"RatingHighLow"}>High To Low rating</MenuItem>
            <MenuItem value={"AtoZ"}>Ass Name</MenuItem>
            <MenuItem value={"ZtoA"}>DIss Name</MenuItem>
          </Select>
        </FormControl>
       
      </Box>
     
       <hr></hr>
      <Grid container sx={{marginLeft:"auto"}}>
      
    

     {mensData.map((el)=>(
       
      <Link to={`products/${el._id}`} style={{textDecoration:"none"}}>
         <Card sx={{ maxWidth: 280 ,minWidth: 280 ,minHeight:480,margin:"20px",height:"400px", marginLeft:"50px"}}>
         <img src={el.image1} alt="" height="60%" width="95%" style={{marginLeft:"8px",marginTop:"5px"}}/>
       {

       }
       <CardContent>
         <Typography gutterBottom variant="h6" component="div" sx={{lineHeight:"20px"}}>
          {el.title}
         </Typography>
         <Typography variant="body2" color="text.secondary">
          Price: ₹{el.price} 
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
    <Footer />
    </>
)
}

export default MenComponent