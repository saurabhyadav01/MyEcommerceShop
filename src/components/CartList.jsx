import React, { useEffect, useState } from "react";
import Header from "./Header";

import { Box, Button, getFormControlLabelUtilityClasses, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchCartProduct,
  setCartProduct,
} from "../redux/actions/cartItemActions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Modal from '@mui/material/Modal';
import Address from "./AddAddress";
import SignIn from "./SignIn";


 const  CartList=()=>
{
  const navigate=useNavigate()
  const loginData = useSelector((store) => store.loginData.loading);
  
if(loginData)
{
 return(
   
   <>
   <CartLists />
   
   </>
 )
}else
{
 // navigate("Home/SignIn")

}
}
const CartLists = () => {
 
  const loginData = useSelector((store) => store.loginData);
  const cartProducts = useSelector(
    (state) => state.cartProductData.cartProducts
  );
  const aData = useSelector((state) => state.addressData.address);
  const Dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [incProduct, setIncProduct] = useState(1);
  const handleDelete = (i) => {
    axios
      .put(`https://ecommrcebackend.herokuapp.com/carts/${i}`)
      .then((response) => {
        // console.log(response.status);
        // console.log(response.data);
        Dispatch(fetchCartProduct());
        setData([...cartProducts]);
      })
      .catch((e) => console.log("something went wrong :(", e));
  };

  useEffect(() => {
    Dispatch(fetchCartProduct());
  }, []);
  data.map((e) => {});
 
  const id= aData._id
  
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
  const handledec = (id) => {
    const filterData = data.filter((e) => {
      if (e.id === id && e.quantity > 1) {
        e.quantity--;
      }
      return e;
    });
    setData([...filterData]);
  };
  const handleinc = (id) => {
    const filterData = cartProducts.filter((e) => {
      if (e.id === id) {
        e.quantity++;
      }
      return e;
    });

    setData([...filterData]);
  };

  const getData = () => {
    setData([...cartProducts]);
  };

  useEffect(() => {
    getData();
  }, []);
// if(id==undefined)
// {
//   return
// }

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
            <h4>My Bag items {numberOfItem}</h4>
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
                  <button
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
                  </button>
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

        <Box style={{display:"flex"}}>
       
          {/* <Button
            sx={{
              color: "black",
              backgroundColor: "#ffa500",
              width: "50%",
              marginLeft: "20px",
            }}
          >
            {" "}
            <Link to="oderSummary" style={{ textDecoration: "none" }}>
              Add Address
            </Link>
          </Button> */}
          <BasicModal />
          <Button
            sx={{
              color: "black",
              backgroundColor: "#ffa500",
              width: "50%",
              marginLeft: "25%",
            }}
          >
            {" "}
            <Link to={`ordersummary/${id }`} style={{ textDecoration: "none" }}>
              CkeakOut
            </Link>
          </Button>
        </Box>
        </div>
      </div>
    </React.Fragment>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};

function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{color: "black",
              backgroundColor: "#ffa500",width:"200%",marginLeft:"10%"}}>Add Address</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <Address />
        </Box>
      </Modal>
    </div>
  );
}

export default CartList;
