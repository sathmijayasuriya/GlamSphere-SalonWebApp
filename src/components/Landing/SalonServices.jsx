import React, { memo } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Memoize ServiceCard to avoid unnecessary re-renders
const ServiceCard = memo(({ name, image, height }) => (
  <div
    style={{
      position: "relative",
      height: height,
      borderRadius: "20px",
      marginBottom: "20px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <LazyLoadImage
      src={image}
      alt={name}
      placeholderSrc={image}
      height={height}
      // effect="blur"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: "20px",
        zIndex: 1,
      }}
    />
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.55)",
        zIndex: 2,
        transition: "background-color 0.3s ease",
      }}
    />
    <Typography
      variant="h5"
      style={{
        fontSize: "65px",
        color: "white",
        textTransform: "capitalize",
        zIndex: 3,
        position: "relative",
        padding: "6px 12px",
        borderRadius: "8px",
      }}
    >
      {name}
    </Typography>
  </div>
));

export default function SalonServices() {
  const Overlay = styled("div")(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    zIndex: 2,
    transition: "background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
      background: "rgba(215, 218, 64, 0.1)",
      color: "black",
    },
  }));

  const OverlayText = styled(Typography)(() => ({
    fontSize: "65px",
    color: "white",
    textTransform: "capitalize",
    zIndex: 3,
    position: "relative",
    padding: "6px 12px",
    borderRadius: "8px",
  }));
  const services = [
    { name: "hair", image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737484988/samples/ecommerce/face_g3foh1.webp", height: "500px" },
    { name: "face", image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737484989/samples/ecommerce/haircuut10_skeeiz.webp", height: "300px" },
    { name: "body", image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737484990/samples/ecommerce/body_pgtpta.webp", height: "450px" },
    { name: "nails", image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737484988/samples/ecommerce/nails_kqituh.webp", height: "300px" },
    { name: "skin care", image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737484990/samples/ecommerce/skincare_ir264c.webp", height: "500px" },
    { name: "more →", image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737484990/samples/ecommerce/more_xduyct.webp", height: "350px" },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: "250px",
        marginBottom: "100px",
        py: "50px",
        backgroundColor: "rgba(0, 0, 0, 0.21)",
      }}
    >
      <Box sx={{ pt: 6, pb: 6, marginLeft: 18 }}>
        <Button
          variant="contained"
          sx={{
            paddingX: "25px",
            py: 1,
            color: "white",
            backgroundColor: "black",
            borderRadius: "155px",
            textTransform: "lowercase",
            "&:hover": {
              border: "0.5px solid black",
              color: "black",
              backgroundColor: "white",
            },
          }}
        >
          Services
        </Button>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={2}>
          <ServiceCard {...services[4]} />
          <div style={{ marginTop: "16px" }} />
          <ServiceCard {...services[3]} />
        </Grid>

        <Grid item xs={5}>
          <ServiceCard {...services[1]} />
          <div style={{ marginTop: "16px" }} />
          <ServiceCard {...services[0]} />
        </Grid>

        <Grid item xs={3}>
          <ServiceCard {...services[2]} />
          <div style={{ marginTop: "16px" }} />
          <ServiceCard {...services[5]} />
        </Grid>
      </Grid>
    </Box>
  );
}
