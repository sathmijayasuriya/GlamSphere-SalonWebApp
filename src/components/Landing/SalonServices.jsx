import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function SalonServices() {
  const services = [
    { name: "hair", image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737484988/samples/ecommerce/face_g3foh1.webp", height: "500px" },
    { name: "face", image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737484989/samples/ecommerce/haircuut10_skeeiz.webp", height: "300px" },
    { name: "body", image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737484990/samples/ecommerce/body_pgtpta.webp", height: "450px" },
    { name: "nails", image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737484988/samples/ecommerce/nails_kqituh.webp", height: "300px" },
    { name: "skin care", image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737484990/samples/ecommerce/skincare_ir264c.webp", height: "500px" },
    { name: "more →", image: "https://res.cloudinary.com/dk239jmcl/image/upload/v1737484990/samples/ecommerce/more_xduyct.webp", height: "350px" },
  ];

  const ServiceCard = styled("div")(({ height }) => ({
    position: "relative",
    height: height,
    borderRadius: "20px",
    marginBottom: "20px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const LazyImage = styled(LazyLoadImage)(({ height }) => ({
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: "20px",
    zIndex: 1,
  }));

  const Overlay = styled("div")(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    zIndex: 2,
    transition: "background-color 0.3s ease",
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
          <ServiceCard height={services[0].height}>
            <LazyImage
              src={services[4].image}
              alt={services[4].name}
              placeholderSrc={services[4].image}
              height={services[4].height}
              srcSet={`${services[4].image}?w=400 400w, ${services[4].image}?w=800 800w`}
              sizes="(max-width: 600px) 400px, 800px"
            />
            <Overlay />
            <OverlayText>{services[4].name}</OverlayText>
          </ServiceCard>
          <div style={{ marginTop: "16px" }} />
          <ServiceCard height={services[3].height}>
            <LazyImage
              src={services[3].image}
              alt={services[3].name}
              placeholderSrc={services[3].image}
              height={services[3].height}
            />
            <Overlay />
            <OverlayText>{services[3].name}</OverlayText>
          </ServiceCard>
        </Grid>

        <Grid item xs={5}>
          <ServiceCard height={services[1].height}>
            <LazyImage
              src={services[1].image}
              alt={services[1].name}
              placeholderSrc={services[1].image}
              height={services[1].height}
            />
            <Overlay />
            <OverlayText>{services[1].name}</OverlayText>
          </ServiceCard>
          <div style={{ marginTop: "16px" }} />
          <ServiceCard height={services[0].height}>
            <LazyImage
              src={services[0].image}
              alt={services[0].name}
              placeholderSrc={services[0].image}
              height={services[0].height}
            />
            <Overlay />
            <OverlayText>{services[0].name}</OverlayText>
          </ServiceCard>
        </Grid>

        <Grid item xs={3}>
          <ServiceCard height={services[2].height}>
            <LazyImage
              src={services[2].image}
              alt={services[2].name}
              placeholderSrc={services[2].image}
              height={services[2].height}
            />
            <Overlay />
            <OverlayText>{services[2].name}</OverlayText>
          </ServiceCard>
          <div style={{ marginTop: "16px" }} />
          <ServiceCard height={services[5].height}>
            <LazyImage
              src={services[5].image}
              alt={services[5].name}
              placeholderSrc={services[5].image}
              height={services[5].height}
            />
            <Overlay />
            <OverlayText>{services[5].name}</OverlayText>
          </ServiceCard>
        </Grid>
      </Grid>
    </Box>
  );
}
