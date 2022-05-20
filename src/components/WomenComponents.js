import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
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
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  sort_price_h_to_l , sort_price_l_to_h ,SORT_BY_WOMEN ,SORT_BY_MEN} from "../redux/actions/productActions";

import ProductListing from "./ProductListing";

const  WomenComponent=()=>
{ const products =useSelector((state)=>state.allProducts.products);
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

const menProduct=()=>
{
 Dispatch(SORT_BY_MEN ())

}

const womenProduct=()=>
{
  Dispatch(SORT_BY_WOMEN ())
}
   //console.log(products);
const womensData=products.filter((e)=>{
 return e.category=="women's clothing"
})
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
            value={price}
            label="SortByPrice"
            onChange={handleChange}
          >
            <MenuItem value={"highToLow"}>Low To High </MenuItem>
            <MenuItem value={"LowToHigh"}>High To Low</MenuItem>
          </Select>
        </FormControl>
       
      </Box>
     
       <hr></hr>
      <Grid container sx={{marginLeft:"auto"}}>
      
    

     {womensData.map((el)=>(
       
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
    <Footer />
    </>
)
}

export default WomenComponent