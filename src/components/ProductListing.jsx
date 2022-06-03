import React, { useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import {} from "react-redux";

import { fetchProduct, setProducts } from "../redux/actions/productActions";
import { fetchCartProduct } from "../redux/actions/cartItemActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const cartProducts = useSelector(
    (state) => state.cartProductData.cartProducts
  );
  const dispatch = useDispatch();
  //console.log(products.allProducts.products)

  //console.log(products)
  const numberOfItem = cartProducts.length;
  console.log(cartProducts);
  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchCartProduct());
  }, []);
  //console.log(products)
  return <React.Fragment></React.Fragment>;
};

export default ProductListing;
