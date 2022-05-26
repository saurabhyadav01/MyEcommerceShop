import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartList = () => {
    const loginData=useSelector((store)=>store.loginData.data)

  const [data, setData] = useState([]);
  const [incProduct, setIncProduct] = useState(1);
  const handleDelete = (e) => {
    // console.log();
    data.splice(e, 1);
    localStorage.setItem("cartItem", JSON.stringify(data));
    getData()
   
  };
  // const loginData=useSelector((store)=>store.loginData.data)
// console.log(loginData.user.firstName)
  const arr=JSON.parse(localStorage.getItem("cartItem")) ||[];
  const  numberOfItem=arr.length
  let totalPrice = 0;
  let tribePrice=0;
  let discount=0;
  
  const Total = data.map((e) => {
    totalPrice += e.price *e.quantity;
     tribePrice = +e.tribe

     discount += +e.discount+e.quantity
  });
console.log(totalPrice-discount)
  const handleinc = (id) => {
    const filterData = data.filter((e) => {
      if (e.id === id) {
        
      e.quantity++
      }
      return e;
    });
    setData([...filterData]);
  };
  const handledec = (id) => {
    const filterData = data.filter((e) => {
      if (e.id === id) {
        
      e.quantity--
      }
      return e;
    });
  
   setData([...filterData]);
  };

 const handleIncrease = (value)=>{
   setIncProduct(incProduct)
     console.log(incProduct)
  
 }


console.log(data)
  const getData=()=>{
    const cartData = JSON.parse(localStorage.getItem("cartItem"));
    setData([...cartData]);
  }

  
  useEffect(() => {
  
    getData()
  }, []);


  const amountToPay = totalPrice-discount ;

  return (
    <React.Fragment>
      <div style={{display:"flex",width:"100%",height:"50px",margin:"auto",justifyContent:"space-between",backgroundColor:"#febd01"}}>
      <Link to="/Home" style={{textDecoration:"none",margin:"10px 0px 0px 50px"}}>Home</Link>

      <Link style={{textDecoration:"none",margin:"10px 50px 0px 0px"}} to="/Home">Hii {loginData.user.firstName}</Link>

      </div>
 
      <div style={{ display: "flex" }}>
      
        <div className="left">
        <div style={{border:".5px solid black",backgroundColor:"#ffffe0",marginTop:"15px"}}><h4>My Bag items {numberOfItem}</h4></div>
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
                  <h4> ₹{e.price *e.quantity}</h4>
                </div>
                <div style={{padding:"5px"}}>
                  <button style={{width:"40px"}}
                    onClick={() => {
                      handleinc(e.id)
                    }}
                  >
                    +
                  </button>
                </div>
                <div style={{padding:"5px"}}>
                  <button style={{width:"40px", margin:""}}>{e.quantity}</button>
                </div>
                <div style={{padding:"5px"}}>
                  <button style={{width:"40px"}}
                    onClick={() => {
                      handledec(e.id)
                     
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
            <div style={{border:".5px solid white ",borderRadius:"5px 5px 1px 1px",backgroundColor:"#ffa500"}}><h4>Save Extra With Tribe{tribePrice}</h4></div>
            <div style={{border:".5px solid white",borderRadius:"1px 1px 1px 5px",backgroundColor:"#ffffe0"}}><h4>Price Summary</h4></div>
          <h4>Total Price:    {totalPrice}</h4>
          <h4> Discount:      {discount}</h4>
          <h4> Delivery Price: {"Free"}</h4>
          <h4>Payable Amount :{totalPrice-discount}</h4>

          <Button sx={{color:"black",backgroundColor:"#ffa500",width:"50%",marginLeft:"20px"}} >
            {" "}
            <Link 
              to="/home/products/cart/payment"
              style={{ textDecoration: "none" }}
            >
              CkeakOut
            </Link>
          </Button>
        </div>
      </div>
     
    </React.Fragment>
  );
};

export default CartList;
