import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo/glamsphereLogo.png";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RateReviewIcon from "@mui/icons-material/RateReview";
import GroupsIcon from "@mui/icons-material/Groups";
import StyleIcon from "@mui/icons-material/Style";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function HeaderAuth() {
  const [shopOpen, setShopOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const handleHover = (menu, isOpen) => {
    if (menu === "shop") {
      setShopOpen(isOpen);
    } else if (menu === "about") {
      setAboutOpen(isOpen);
    }
  };

  const dropdownStyles = {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#08080C",
    color: "white",
    boxShadow: "0px 1px 1px rgba(8, 8, 8, 0.2)",
    borderRadius: "8px",
    zIndex: 10,
    padding: "10px 0",
    minWidth: "180px",
  };

  const menuItemStyles = {
    padding: "10px 20px",
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#333",
    },
  };

  return (
    <AppBar
      position="absolute"
      color="transparent"
      sx={{
        boxShadow: "none",
        zIndex: 3,
        paddingX: 10,
        marginX: "50px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box component={Link} to="/" paddingX={2} sx={{ marginTop: 4 }}>
          <img alt="Logo" src={logo} height={70} />
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3, position: "relative" }}>
        <Button
  component={Link}
  to="/"
  sx={{
    color: "white", // Default text color
    position: "relative", // For pseudo-element positioning
    backgroundColor: "transparent", // No background color on hover
    "&:hover": {
      backgroundColor: "transparent", // Ensure no hover background
    },
    "&::after": {
      content: '""', // Pseudo-element content
      position: "absolute",
      bottom: -6, // Position below the button
      left: "50%",
      transform: "translateX(-50%)",
      width: 6, // Dot size
      height: 6,
      borderRadius: "50%", // Circle shape
      backgroundColor: "transparent", // Dot hidden by default
      transition: "background-color 0.3s ease", // Smooth hover transition
    },
    "&:hover::after": {
      backgroundColor: "white", // Show the dot on hover
    },
  }}
>
            Home
          </Button>
          <Button component={Link} to="/services" sx={{ color: "white" }}>
            Services
          </Button>
          <Button component={Link} to="/gallery" sx={{ color: "white" }}>
            Gallery
          </Button>

          {/* Shop Dropdown */}
          <Box
            onMouseEnter={() => handleHover("shop", true)}
            onMouseLeave={() => handleHover("shop", false)}
            sx={{ position: "relative" }}
          >
            <Button sx={{ color: "white" }}>Shop</Button>
            {shopOpen && (
              <Box sx={dropdownStyles}>
                <Box component={Link} to="/giftcards" sx={menuItemStyles}>
                  <CardGiftcardIcon />
                  Gift Cards
                </Box>
                <Box component={Link} to="/products" sx={menuItemStyles}>
                  <ShoppingBasketIcon />
                  Products
                </Box>
              </Box>
            )}
          </Box>

          {/* About Us Dropdown */}
          <Box
            onMouseEnter={() => handleHover("about", true)}
            onMouseLeave={() => handleHover("about", false)}
            sx={{ position: "relative" }}
          >
            <Button sx={{ color: "white" }}>About Us</Button>
            {aboutOpen && (
              <Box sx={dropdownStyles}>
                <Box component={Link} to="/contact" sx={menuItemStyles}>
                  <ChatBubbleIcon />
                  Contact Us
                </Box>
                <Box component={Link} to="/reviews" sx={menuItemStyles}>
                  <RateReviewIcon />
                  Reviews
                </Box>
                <Box component={Link} to="/careers" sx={menuItemStyles}>
                  <GroupsIcon />
                  Careers
                </Box>
              </Box>
            )}
          </Box>
        </Box>

        {/* Sign In Button */}
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: "white",
              cursor: "pointer",
              // textTransform:"none",
              transition: "color 0.3s ease", // Smooth transition for hover effect
              "&:hover": {
                color: "pink",
                // boxShadow: "0px 0px 10px pink",
              },
            }}
          >
            Login
          </Typography>

          <Button
            variant="outlined"
            href="/#"
            sx={{
              "&:hover": {
                boxShadow: "0px 0px 10px #F0F8FF",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
