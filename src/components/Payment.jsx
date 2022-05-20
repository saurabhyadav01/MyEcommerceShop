import React from "react";
import Address from "./AddAddress";
import Header from "./Header";
import Payments from "./PaymentComponent";

const Payment=()=>
{
return <>
<Header />
<div style={{display:"flex", border:"2px solid gray",width:"60%",margin:"auto",marginTop:"20px"}}>
{/* <Address /> */}
<div><img src="https://tse2.mm.bing.net/th?id=OIP.dlGusYKEJli7_esUUnS-4QHaFj&pid=Api&P=0&w=228&h=171" alt="" height="350px"/></div>
<Payments />
</div>
</>
}

export default Payment


