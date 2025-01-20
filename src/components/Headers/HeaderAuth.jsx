import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo/glamsphereLogo.png";
export default function HeaderAuth() {
  return (
    <AppBar
      position="absolute" // Overlay the header on top of the image
      color="transparent" // Make the header background transparent
      sx={{
        boxShadow: "none",
        zIndex: 3, // Ensure it's above other elements
        paddingX:10
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", }}>
        <Box component={Link} to={"/"} paddingX={2} sx={{marginTop:4}}>
          <img alt="Logo" src={logo} height={70} />
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button component={Link} to="/" sx={{ color: "white" }}>
            Home
          </Button>
          <Button component={Link} to="/services" sx={{ color: "white" }}>
            Services
          </Button>
          <Button component={Link} to="/gallery" sx={{ color: "white" }}>
            Gallery
          </Button>
          <Button component={Link} to="/shop" sx={{ color: "white" }}>
            Shop
          </Button>
          <Button component={Link} to="/about" sx={{ color: "white" }}>
            About Us
          </Button>
        </Box>

        {/* Sign In Button */}
        <Box>

        </Box>
        <Button variant="outlined" href="/#"
          sx={{
            '&:hover':{
              boxShadow: "0px 0px 10px #F0F8FF", 
            }  
          }}>
          Sign In
        </Button>
      </Toolbar>
    </AppBar>
  );
}
