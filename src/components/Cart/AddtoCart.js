import { Drawer, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { ShoppingBaig } from "../../assets/icons";
import CustomButton from "../CusButton/CustomButton";

const AddtoCart = ({ open, onClose }) => {
  const [empty]=useState(false)
    return (
    <Box>
      <Drawer anchor="right" open={open} onClose={onClose}>
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
              onClick={onClose}
              sx={{ cursor: "pointer", fontSize: "16px", fontWeight: "600" }}
            >
              X
            </Box>
            <Typography
              variant="h1"
              sx={{ fontSize: "15px", fontWeight: "400" }}
              color="secondary"
            >
              CART
            </Typography>
          {empty ? ( 
            <>  
            <Box sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mt: "100%",
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{ fontSize: "15px", fontWeight: "400" }}
                    color="secondary"
                  >
                    You have no items in your Shopping baig.
                  </Typography>
                </Box>
              </Box>
              <CustomButton
                sx={{ width: "314px" }}
                variant="contained"
                color="secondary"
                startIcon={<ShoppingBaig stroke="white" />}
                label="CONTINUE SHOPPING"
              />
              </>       
          )
        : (
            <>
            <Box sx={{flexGrow: 1}}>
            <Box sx={{display: 'flex', mt: 1 }}>
            <Box>
            <img width='110px' src='../images/Rectangle332.png' alt='' />
            </Box>
            <Box pl={1}>
            <Typography variant='h1' sx={{fontSize: '16px', fontweight: '400'}} color='success'   >
            LAmere
            </Typography>
            <Typography pt={1.5} variant='h1' sx={{fontSize: '12px', fontweight: '400'}} color='warning'   >
            Recycle Boucle Knit Cardigan Pink
            </Typography>
            <Box sx={{display: 'flex'}} pt={0.5}>
            <Box>
            <img src='../images/Minus.png' alt=''/>
            </Box>
            <Box mx={2}>0</Box>
            <Box>+</Box>
            </Box>

            <Typography variant="body1" color='info' sx={{fontSize: '15px', pt: '15px'}}>$200</Typography>
            </Box>
            
            </Box>
            </Box>
            <Divider></Divider> 
            <Box display={'flex'} py={1} justifyContent={'space-between'}>
            <Typography variant="h1" color={"secondary"} sx={{fontSize: '15px'}}>SUB TOTAL
            </Typography>
            <Typography variant="body1" color={'info'} sx={{fontSize: '15px'}}>$200</Typography>
            </Box>
            <Typography my={2} variant="h1" sx={{fontSize: '14px', fontWeight: '400'}} color="secondary" >
            *shipping charges, taxes and discount codes are calculated at the time of accounting. 
            </Typography>
           
            <CustomButton
            sx={{ width: "314px", marginBottom: '0px' }}
            variant="contained"
            color="secondary"
            startIcon={<ShoppingBaig stroke="white" />}
            label="BUY NOW"
          />
            </>
        )}  
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default AddtoCart;

