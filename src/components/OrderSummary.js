import React, { useEffect, useState } from "react";
import Header from "./Header";

import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchCartProduct,
  setCartProduct,
} from "../redux/actions/cartItemActions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetch_Adderss } from "../redux/actions/addressAction";
import SignIn from "./SignIn";


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
 
 const getAddressData = () => {
  axios
    .get(`https://ecommrcebackend.herokuapp.com/address`)
    .then((res) => {
      // console.log(res.data);
     
    })
    .catch((e) => {
      alert(" Failed ");
    });
};
console.log()
//getAddressData()
  useEffect(() => {
    Dispatch(fetchCartProduct());
    Dispatch(fetch_Adderss())
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
  console.log(u);
  const numberOfItem = data.length;
  let totalPrice = 0;
  let tribePrice = 0;
  let discount = 0;

  const Total = cartProducts.map((e) => {
    totalPrice += e.price * e.quantity;
    tribePrice = +e.tribe;

    discount += +e.discount * +e.quantity;
  });
  //console.log(totalPrice-discount)
  //   const handledec = (id) => {
  //     const filterData = data.filter((e) => {
  //       if (e.id === id &&e.quantity>1 ) {
  //         e.quantity--;
  //       }
  //       return e;
  //     });
  //     setData([...filterData]);
  //   };
  //   const handleinc = (id) => {
  //     const filterData = cartProducts.filter((e) => {
  //       if (e.id === id ) {
  //         e.quantity++;
  //       }
  //       return e;
  //     });
  //     // Dispatch(fetchCartProduct())
  //     setData([...filterData]);
  //   };

  const getData = () => {
    setData([...cartProducts]);
  };

  useEffect(() => {
    getData();
  }, []);

  const amountToPay = totalPrice - discount;

  return (
    <React.Fragment>
      {/* <div
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
          Hii{u}
        </Link>
      </div> */}
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
              <h5>House No:{"102"}</h5>
              <h5>chauri chaura,{"District"}:Gorakhpur</h5>
              <h5>
                Pin code:{"273203"}, State:{"Utter Pradesh"}
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
                  {/* <button
                    style={{ width: "40px" }}
                    onClick={() => {
                      
                      handleinc(e.id);
                    }}
                  >
                    +
                  </button>
                </div>
                <div style={{ padding: "5px" }}>
                  <button style={{ width: "40px", margin: "" }}>
                    {e.quantity}
                  </button>
                </div>
                <div style={{ padding: "5px" }}>
                  <button
                    style={{ width: "40px" }}
                    onClick={() => {
                      handledec(e.id);
                    }}
                  >
                    -
                  </button>
                </div>
                <div style={{ padding: "5px" }}>
                  <button
                    onClick={() => {
                      handleDelete(e._id);
                    }}
                  >
                    Delete
                  </button> */}
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
            <Link to="payment" style={{ textDecoration: "none" }}>
              Click Here To Pay
            </Link>
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderSummary;
