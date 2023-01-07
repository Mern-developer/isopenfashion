import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Instagram, StyleishLine, Twitter, Youtube } from "../../assets/icons";
import CustomButton from "../CusButton/CustomButton";
const Footer = () => {
  const menuStyle = {
    fontWeight: "bold",
    fontFamily: "Tenor Sans",
    textTransform: "none",
  };
  return (
    <>
      <Box mt={4}>
        <Box
          sx={{
            mx: "auto",
            width: { xs: "200px", md: "200px" },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Twitter />
          <Instagram />
          <Youtube />
        </Box>
        <Box textAlign={"center"} mt={2}>
          <StyleishLine />
        </Box>
        <Stack spacing={1}>
          <CustomButton
            label="fari-abbasi@yahoo.com"
            sx={{ textTransform: "none", fontSize: "16px", fontWeight: "400" }}
            color="secondary"
            component="a"
            href="mailto:fari-abbasi@yahoo.com"
          ></CustomButton>

          <CustomButton
            label="03043138173"
            sx={{ textTransform: "none", fontSize: "16px", fontWeight: "400" }}
            color="secondary"
            component="a"
            href="tel:+92 03043138173"
          ></CustomButton>
          <Typography
            textAlign={" center"}
            sx={{ fontSize: "16px", fontWeight: "400" }}
            color="secondary"
          >
            08:00 - 22:00 - Everyday
          </Typography>
        </Stack>
        <Box textAlign={"center"}>
          <Button 
          variant="text" color="success" sx={menuStyle}>
            Home
          </Button>
          <Button variant="text" color="success" sx={menuStyle}>
            About
          </Button>
          <Button variant="text" color="success" sx={menuStyle}>
            Contact
          </Button>
          <Button variant="text" color="success" sx={menuStyle}>
            Blog
          </Button>
        </Box>
        <Box sx={{bgcolor: 'background.default', height: '40px', justifyContent: 'center' ,display: 'flex', alignItems: 'center'}}>
        <Typography variant="h3" textAlign={'center'} sx={{fontSize: '12px', fontWeight: '400'}} color='text.secondary'>
        Copyright© OpenUI All Rights Reserved.</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
