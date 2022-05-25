import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartList = () => {
  const [data, setData] = useState([]);
  const [incProduct, setIncProduct] = useState(1);
  const handleDelete = (e) => {
    // console.log();
    data.splice(e, 1);
    localStorage.setItem("cartItem", JSON.stringify(data));
    getData()
   
  };
  let totalPrice = 0;
  const Total = data.map((e) => {
    totalPrice += e.price;
  });
  const handleinc = (id) => {
    const filterData = data.filter((e) => {
      if (e.id === id) {
        e.quantity++;
      }
      return e;
    });
  //  console.log(filterData);
  };

 const handleIncrease = (value)=>{
   setIncProduct(incProduct+value)
     console.log(incProduct)
  
 }



  const getData=()=>{
    const cartData = JSON.parse(localStorage.getItem("cartItem"));
    setData([...cartData]);
  }

  
  useEffect(() => {
  
    getData()
  }, []);



  const Discount = 0;

  const amountToPay = totalPrice + Discount;

  return (
    <React.Fragment>
      <div style={{display:"flex",width:"100%",height:"50px",margin:"auto",justifyContent:"space-between",backgroundColor:"#febd01"}}>
      <Link to="/Home" style={{textDecoration:"none",margin:"10px 0px 0px 50px"}}>Home</Link>

      <Link style={{textDecoration:"none",margin:"10px 50px 0px 0px"}} to="/Home">Sign as {}</Link>

      </div>
 
      <div style={{ display: "flex" }}>
      
        <div className="left">
        <div style={{border:".5px solid black",backgroundColor:"#ffffe0",marginTop:"15px"}}><h4>My Bag items {1}</h4></div>
          <div className="container">
            {data.map((e, index) => (
              <div className="flex" key={index}>
                <div>
                  <h4>{e.id}</h4>
                </div>
                <img style={{width:"12%"}} src={e.image1} alt="" />
                <div>
                  <h4>{e.title}</h4>
                </div>
                <div>
                  <h4>{}</h4>
                </div>
                <div style={{padding:"5px"}}>
                  <button style={{width:"40px"}}
                    onClick={() => {
                      handleIncrease(1)
                    }}
                  >
                    +
                  </button>
                </div>
                <div style={{padding:"5px"}}>
                  <button style={{width:"40px", margin:""}}>{incProduct}</button>
                </div>
                <div style={{padding:"5px"}}>
                  <button style={{width:"40px"}}
                    onClick={() => {
                      handleIncrease(-1)
                     
                    }}
                  >
                    -
                  </button>
                </div>
                <div style={{padding:"5px"}}>
                  <button
                    onClick={() => {
                      handleDelete(index);
                      
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
         border:".5px solid wheat",
            width: "40%",
            margin: "auto",
         
            height: "350px",
            marginTop:"15px",
          }}
        >
            <div style={{border:".5px solid white ",borderRadius:"5px 5px 1px 1px",backgroundColor:"#ffa500"}}><h4>Save Extra With Tribe</h4></div>
            <div style={{border:".5px solid white",borderRadius:"1px 1px 1px 5px",backgroundColor:"#ffffe0"}}><h4>Price Summary</h4></div>
          <h4>Total Price: {totalPrice}</h4>
          <h4> Discount: {Discount}</h4>
          <h4> Delivery Price: {Discount}</h4>
          <h4>Payable Amount :{amountToPay}</h4>

          <Button sx={{color:"black",backgroundColor:"#ffa500",width:"50%",marginLeft:"20px"}} >
            {" "}
            <a
              href="/home/products/cart/payment"
              style={{ textDecoration: "none" }}
            >
              CkeakOut
            </a>
          </Button>
        </div>
      </div>
     
    </React.Fragment>
  );
};

export default CartList;
