import React from "react";
import { Box } from "@mui/material";

const GoogleMap = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        height: 400,
        border: 0,
        filter: "grayscale(100%)", // Apply grayscale filter
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.41984443695!2d79.97522049999999!3d6.847983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae251b04d222e87%3A0x9d069ca1fce6c6ce!2sAthurugiriya%20Rd!5e0!3m2!1sen!2slk!4v1737313475412!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{
          border: 0,
        }}
        allowFullScreen
        loading="lazy"
        title="Google Map"
      ></iframe>
    </Box>
  );
};

export default GoogleMap;
