import React from "react";
import Address from "./AddAddress";
import Header from "./Header";
import Payments from "./PaymentComponent";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "./SignIn";

const  Payment=()=>
{
  const navigate=useNavigate()
  const loginData = useSelector((store) => store.loginData.loading);
  
if(loginData)
{
 return(
   <>
   <PaymentModel />
   
   </>
 )
}else
{
  return <>
<SignIn />
</>
}
}



const PaymentModel = () => {
  const loginData = useSelector((store) => store.loginData);
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50px",
          margin: "auto",
          justifyContent: "space-between",
          backgroundColor: "#febd01",
        }}
      >
        <Link
          to="/Home"
          style={{ textDecoration: "none", margin: "10px 0px 0px 50px" }}
        >
          Home
        </Link>

        <Link
          style={{ textDecoration: "none", margin: "10px 50px 0px 0px" }}
          to="/Home"
        >
          Hii {loginData.data.user.firstName}
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          border: "2px solid gray",
          width: "60%",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        {/* <Address /> */}
        <div>
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.dlGusYKEJli7_esUUnS-4QHaFj&pid=Api&P=0&w=228&h=171"
            alt=""
            height="350px"
            width="100%"
          />
        </div>
        <Payments />
      </div>
    </>
  );
};

export default Payment;
