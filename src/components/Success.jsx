import React from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Home from "./Home";
import OrderSummary from "./OrderSummary";
const Success = () => {
  return (
    <React.Fragment>
      <Box sx={{ width: "80%", margin: "auto" }}>
        <Link to="/Home">
          <img
            src="https://rlv.zcache.com/pink_vintage_thank_you_for_your_purchase_cards-rd759a94c24f549c7a20c20e3df5c5228_ken53_8byvr_630.jpg?view_padding=[285%2C0%2C285%2C0]"
            alt=""
          />
        </Link>
      </Box>
    </React.Fragment>
  );
};

export default Success;
