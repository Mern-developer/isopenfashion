import React, { useState } from "react";
import { Drawer, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import CustomButton from "../components/CusButton/CustomButton";
import { DeliveryDoor, Plus, Promocode, ShoppingBaig, StyleishLine } from "../assets/icons";
import CustomChip from "../components/CustomChip/CustomChip";

const Checkout = ({checkoutc, setCheckoutc, setCartOpen}) => {

    return (
  <Drawer anchor="right" open={checkoutc} onClose={()=>setCheckoutc(false)} >
  <Box px={1} width="330px" role="presentation">
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        my={1}
        onClick={()=>{setCheckoutc(false); setCartOpen(true);}}
        sx={{ cursor: "pointer", fontSize: "16px", fontWeight: "600" }}
      >
        X
      </Box>
      <Typography
        variant="h1"
        textAlign={'center'}
        sx={{ fontSize: "15px", fontWeight: "400" }}
        color="secondary"
      >
        CHECKOUT
      </Typography>
      <Box textAlign={'center'}>
        <StyleishLine />
        </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: "flex", my: 1 }}>
              <Box>
                <img
                  width="110px"
                  src="../images/Rectangle332.png"
                  alt=""
                />
              </Box>
              <Box pl={1}>
                <Typography
                  variant="h1"
                  sx={{ fontSize: "16px", fontweight: "400" }}
                  color="success"
                >
                  LAmere farhan
                </Typography>
                <Typography
                  pt={1.5}
                  variant="h1"
                  sx={{ fontSize: "12px", fontweight: "400" }}
                  color="warning"
                >
                  Recycle Boucle Knit Cardigan Pink
                </Typography>
                <Box sx={{ display: "flex" }} pt={0.5}>
                  <Box>
                    <img src="../images/Minus.png" alt="" />
                  </Box>
                  <Box mx={2}>0</Box>
                  <Box>+</Box>
                </Box>
                <Typography
                  variant="body1"
                  color="info"
                  sx={{ fontSize: "15px", pt: "15px" }}
                >
                  $200
                </Typography>
              </Box>
            </Box>
            <Divider></Divider>
           <Box my={2} sx={{display: 'flex',  alignItems: 'center' }}> 
          <Box>
          <Promocode />
          </Box>
           <Typography variant='h1' sx={{fontSize: '14px', ml:1 }} color="secondary">
           Add promo code
           </Typography>
           </Box>
           <Divider></Divider>
           <Box my={2} sx={{display: 'flex',  alignItems: 'center' }}> 
           <Box>
           <DeliveryDoor />
           </Box>
            <Typography variant='h1' sx={{fontSize: '14px', ml:1 }} color="secondary">
                Deliver 
            </Typography>
            </Box>
           <Divider></Divider>
           <CustomButton  elevation={0} endIcon={<Plus style={{mr: 4}} stroke="white"/>} 
            variant='contained' color="warning" label='add shipping address' sx={{width: '100%'}} />

           </Box>


          <Divider></Divider>
          
          
          <Box display={"flex"} py={1} justifyContent={"space-between"}>
            <Typography
              variant="h1"
              color={"secondary"}
              sx={{ fontSize: "15px" }}
            >
              SUB TOTAL
            </Typography>
            <Typography
              variant="body1"
              color={"info"}
              sx={{ fontSize: "15px" }}
            >
              $200
            </Typography>
          </Box>
          <CustomButton
            sx={{ width: "314px", marginBottom: "0px" }}
            variant="contained"
            color="secondary"
            startIcon={<ShoppingBaig stroke="white" />}
            label="PLACE ORDER"
          />
        
    </Box>
  </Box>
</Drawer>

  
  )
}

export default Checkout