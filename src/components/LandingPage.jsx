import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { color, fontSize, margin, padding } from "@mui/system";
const LandingPage=()=>
{
    
    return (
        <>
        
        <Card sx={{ width:400, margin:"auto" ,marginTop:"2%"}}>
      <CardActionArea>
          <Typography variant="h2" sx={{textAlign:"center"}}>My Shop</Typography>
        <CardMedia
          component="img"
          height="340"
          image="https://www.buylandingpagedesign.com/example/online-store-for-sunglasses-ecommerce-call-to-action-responsive-landing-page-design-001-th.jpg"
          alt="green iguana"
        />
        <Button  sx={{marginLeft:37,textDecoration:"none" }}><Link to="/Home" style={{textDecoration:"none",color:"black"}}>Continue..</Link></Button>
      </CardActionArea>
    </Card>
        </>
    )
}


export default LandingPage