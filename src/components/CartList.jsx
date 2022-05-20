import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Button } from "@mui/material";
import { Link } from "@mui/material";

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
    // const cartData = JSON.parse(localStorage.getItem("cartItem"));
    // setData([...data, ...cartData]);
    getData()
  }, []);



  const Discount = 0;

  const amountToPay = totalPrice + Discount;

  return (
    <React.Fragment>
      <Header />

      <div style={{ display: "flex" }}>
        <div className="left">
          <div className="container">
            {data.map((e, index) => (
              <div className="flex" key={index}>
                <div>
                  <h4>{e.id}</h4>
                </div>
                <div>
                  <img src={e.image} alt="" width="80%" height="80%" />
                </div>
                <div>
                  <h4>{e.title}</h4>
                </div>
                <div>
                  <h4>{e.price+incProduct}</h4>
                </div>
                <div style={{}}>
                  <button
                    onClick={() => {
                      handleIncrease(1)
                    }}
                  >
                    +
                  </button>
                </div>
                <div>
                  <span>{incProduct}</span>
                </div>
                <div style={{}}>
                  <button
                    onClick={() => {
                      handleIncrease(-1)
                     
                    }}
                  >
                    -
                  </button>
                </div>
                <div style={{}}>
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
          className="right"
          style={{
            textAlign: "center",
            position: "fixed",
            margin: "80px",
            border: "1px solid gray",
            width: "30%",
            margin: "auto",
            height: "300px",
          }}
        >
          <h2>Total Price: {totalPrice}</h2>
          <h2> Discount: {Discount}</h2>
          <h2>Payable Amount :{amountToPay}</h2>

          <Button variant="contained">
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
