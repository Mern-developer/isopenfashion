import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import "../../index.css";
import {
  MainLogo,
  MBurger,
  SearchIcon,
  ShoppingBaig,
} from "../../assets/icons";
import CustomLinkTo from '../CustomLinkTo'
import { Drawer } from "@mui/material";
import Menu from "../../screens/Menu";
import AddtoCart from "../Cart/AddtoCart";

const Header = () => {
  const menuStyle = {
    fontWeight: "bold",
    fontFamily: "Tenor Sans",
    textTransform: "none",
  };
const [open, setOpen]=useState(false);
const [cartopen, setCartOpen]=useState(false);
console.log(CustomLinkTo)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "background.default" }} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="info"
            aria-label="menu"
            sx={{ display: { md: "none" }, mr: 2 }}
            onClick={()=>setOpen(true)}
          >
            <MBurger />
          </IconButton>
          <IconButton size="large" edge="start" color="info" aria-label="menu">
          <CustomLinkTo to='/' >
            <MainLogo />
            </CustomLinkTo>
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
          <CustomLinkTo to='/' >
            <Button variant="text" color="success" sx={menuStyle}>
              Home
            </Button>
            </CustomLinkTo>  
            <Button variant="text" color="success" sx={menuStyle}
            onClick={()=>setOpen(true)}
            >
              Menu
            </Button>
          <CustomLinkTo to="/blog">  
            <Button variant="text" color="success" sx={menuStyle}>
              Blog
            </Button>
            </CustomLinkTo>
            <Button variant="text" color="success" sx={menuStyle}>
              About Us
            </Button>
            <Button variant="text" color="success" sx={menuStyle}>
              Contact us
            </Button>
          </Box>
          <Box style={{display: 'flex', cursor: 'pointer'}}>
            <SearchIcon />
            <span style={{color: 'transparent'}}>ss</span>
            <Box  onClick={()=>setCartOpen(true)}>
            <ShoppingBaig sx={{ mr: 5 }}   />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      
      <Drawer  anchor='left'
    open={open} 
      onClose={()=>setOpen(false)}
      >
      <Box p={2} width='300px'
      role="presentation"
      >
     
      <Menu  setOpen={setOpen} />


      </Box>      
      </Drawer>
      <AddtoCart open={cartopen} onClose={()=>setCartOpen(false)} />

      </Box>
  );
};

export default Header;
