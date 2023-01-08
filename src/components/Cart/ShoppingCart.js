import { Drawer, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { ShoppingBaig } from "../../assets/icons";
import Checkout from "../../screens/Checkout";
import CustomButton from "../CusButton/CustomButton";
import CustomLinkTo from "../CustomLinkTo";
import Addtocart from "./Addtocart";

const ShoppingCart = ({ cartopen, setCartOpen }) => {
  const [openCheckout, setOpenCheckout] = useState(false);

  
  return (
    <>
    <Drawer anchor="right" open={cartopen} onClose={()=>setCartOpen(false)}>
    <Addtocart openCheckout={openCheckout} setOpenCheckout={setOpenCheckout} />
    </Drawer>
  </>
    );
};

export default ShoppingCart;
