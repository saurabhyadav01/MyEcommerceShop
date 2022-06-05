import React, { useEffect, useState } from "react";
import Header from "./Header";

import { Button } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  fetchCartProduct,
  setCartProduct,
} from "../redux/actions/cartItemActions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import SignIn from "./SignIn";
import { Fetch_Adderss } from "../redux/actions/addressAction";


const  OrderSummary=()=>
{
  const navigate=useNavigate()
  const loginData = useSelector((store) => store.loginData.loading);
  
if(loginData)
{
 return(
   <>
   <OrderSummarys />
   
   </>
 )
}else
{
  return <>
  <SignIn />
  </>
}
}


const OrderSummarys = () => {
  const loginData = useSelector((store) => store.loginData);
  const dileveryAddress = useSelector((store) => store.addressData.address);
  const address= useSelector((state) => state.fetchAddress);
  const cartProducts = useSelector(
    (state) => state.cartProductData.cartProducts
  );
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [incProduct, setIncProduct] = useState(1);
 // fetch address
 const {id}= useParams();
 console.log(id)
 console.log(dileveryAddress)
//  const getAddressData = () => {
//   axios
//     .get(`https://localhost:5000/address${id}`)
//     .then((res) => {
//        console.log(res.data);
     
//     })
//     .catch((e) => {
//       alert(" Failed ");
//     });
// };
// console.log()
// if(id==undefined)
// {
//   alert("Please Add Address");
//   return
// }
  useEffect(() => {
    Dispatch(Fetch_Adderss(id))
    Dispatch(fetchCartProduct());
    
  }, []);
  data.map((e) => {});
  const getUserData = () => {
    if (loginData.loading == true) {
      return loginData.data.user.firstName;
    } else {
      return (
        <>
          <h4>HI</h4>
        </>
      );
    }
  };
  const u = getUserData();
 ;
  const numberOfItem = data.length;
  let totalPrice = 0;
  let tribePrice = 0;
  let discount = 0;

  const Total = cartProducts.map((e) => {
    totalPrice += e.price * e.quantity;
    tribePrice = +e.tribe;

    discount += +e.discount * +e.quantity;
  });
  

  const getData = () => {
    setData([...cartProducts]);
  };

  useEffect(() => {
    getData();
  }, []);

  const amountToPay = totalPrice - discount;

  return (
    <React.Fragment>
    
      <Header />

      <div style={{ display: "flex" }}>
        <div className="left">
          <div
            style={{
              border: ".5px solid black",
              backgroundColor: "#ffffe0",
              marginTop: "15px",
            }}
          >
            <h5 style={{ textAlign: "center" }}>Delivery Address</h5>
            <div>
            <h5>Name:{dileveryAddress.firstName} {dileveryAddress.lastNmae}</h5>
              <h5>House No:{"102"}</h5>
              <h5>{dileveryAddress.address}</h5>
              <h5>
                Pin code:{dileveryAddress.pin}, State:{dileveryAddress.state}
              </h5>
            </div>
          </div>
          <div className="container">
            {cartProducts.map((e, index) => (
              <div className="flex" key={index}>
                <div>
                  <h4>{e.id}</h4>
                </div>
                <img style={{ width: "12%" }} src={e.image1} alt="" />
                <div>
                  <h4>{e.title}</h4>
                </div>
                <div>
                  <h4> ₹{e.price * e.quantity}</h4>
                </div>
                <div style={{ padding: "5px" }}>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className=""
          style={{
            margin: "80px",
            border: ".5px solid wheat",
            width: "40%",
            margin: "auto",

            height: "350px",
            marginTop: "15px",
          }}
        >
          <div
            style={{
              border: ".5px solid white ",
              borderRadius: "5px 5px 1px 1px",
              backgroundColor: "#ffa500",
            }}
          >
            <h4>Save Extra With Tribe{tribePrice}</h4>
          </div>
          <div
            style={{
              border: ".5px solid white",
              borderRadius: "1px 1px 1px 5px",
              backgroundColor: "#ffffe0",
            }}
          >
            <h4>Price Summary</h4>
          </div>
          <h4>Total Price: {totalPrice}</h4>
          <h4> Discount: {discount}</h4>
          <h4> Delivery Price: {"Free"}</h4>
          <h4>Payable Amount :{totalPrice - discount}</h4>

          <Button
            sx={{
              color: "black",
              backgroundColor: "#ffa500",
              width: "50%",
              marginLeft: "20px",
            }}
          >
            {" "}
            <Link to="/home/products/cart/ordersummary/payment" style={{ textDecoration: "none" }}>
              Click Here To Pay
            </Link>
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderSummary;
