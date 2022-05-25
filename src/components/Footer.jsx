import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

const Footer=()=>
{
    return (
        <React.Fragment>
            {
                     <Box noValidate sx={{ mt: 3 }} style={{width:"100%",height:"100px",backgroundColor:"black"}}>
                         <Typography component="h1" variant="h6" sx={{textAlign:"center",color:"white"}} >
                     copyright @Saurabh Yadav
                   </Typography>
                     </Box>
            }
        </React.Fragment>
    )
}
export default Footer