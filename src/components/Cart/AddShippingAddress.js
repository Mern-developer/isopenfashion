import { Box, Drawer, Typography } from '@mui/material';
import React from 'react'
import { StyleishLine } from '../../assets/icons';

const AddShippingAddress = ({openaddShopAddre, setaddShopAddre, setCheckoutc}) => {

    return (
    <Drawer anchor="right" open={openaddShopAddre} onClose={() => setaddShopAddre(false)}>
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
          onClick={() => {
            setaddShopAddre(false);
            setCheckoutc(true);
          }}
          sx={{ cursor: "pointer", fontSize: "16px", fontWeight: "600" }}
        >
          X
        </Box>
        <Typography
          variant="h1"
          textAlign={"center"}
          sx={{ fontSize: "22px", fontWeight: "400" }}
          color="secondary"
        >
        ADD SHIPPING ADDRESS
        </Typography>
        <Box textAlign={"center"}>
          <StyleishLine />
        </Box>
        </Box>
        <Box>
        -------------farahae -========-=-=-=
        </Box>
        </Box>
        </Drawer>
  )
}

export default AddShippingAddress