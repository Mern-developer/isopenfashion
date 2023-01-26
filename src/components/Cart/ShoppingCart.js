import { Drawer } from "@mui/material";
import React, { useState } from "react";
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
