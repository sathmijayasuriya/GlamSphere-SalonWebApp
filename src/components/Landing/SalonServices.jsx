import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import Hair from "../../Assets/features/haircuut10.jpg";
import Face from "../../Assets/features/face.webp";
import Body from "../../Assets/features/3.jpg";
import Nails from "../../Assets/features/nails.jpg";
import SkinCare from "../../Assets/features/skincare.jpg";
import More from "../../Assets/features/more.jpg";

export default function SalonServices() {
  const services = [
    { name: "hair", image: Hair, height: "500px" },  //0
    { name: "face", image: Face, height: "300px" },
    { name: "body", image: Body, height: "450px" },
    { name: "nails", image: Nails, height: "300px" },
    { name: "skin care", image: SkinCare, height: "500px" }, //4
    { name: "more →", image: More, height: "350px" },
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

  const Image = styled("div")(({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // filter: "contrast(0.5)", // Apply contrast filter here
    // filter: "grayscale(100%)", // Apply grayscale filter
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    // '&:hover': {
    //     filter: "contrast(0.9999)", // Apply contrast filter here
    // }
  }));
  const Overlay = styled("div")(() => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    // filter: "contrast(0.8)", // Apply contrast filter here
    backgroundColor: "rgba(0, 0, 0, 0.55)", // Semi-transparent black overlay
    zIndex: 2,
    transition: "background-color 0.3s ease",
    "&:hover": {
     background: "rgba(215, 218, 64, 0.1)",
     color:"black"
  },
  }));

  const OverlayText = styled(Typography)(() => ({
    fontSize: "65px",
    // fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
    zIndex: 2, // Ensure text is above the image
    position: "relative",
    // background: "rgba(215, 218, 64, 0.75)",
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
        backgroundColor: "rgba(0, 0, 0, 0.21)", // Semi-transparent black overlay
      }}
    >
      {/* Services Button */}
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

      {/* Grid Layout */}
      <Grid container spacing={3} justifyContent="center">
        {/* Left Column */}
        <Grid item xs={2}>
          <ServiceCard height={services[0].height}>
            <Image image={services[4].image} />
            <Overlay />
            <OverlayText >
              {services[4].name}
            </OverlayText>
          </ServiceCard>
          <div style={{ marginTop: "16px" }} />
          <ServiceCard height={services[3].height}>
            <Image image={services[3].image} />
            <Overlay />
            <OverlayText>{services[3].name}</OverlayText>
          </ServiceCard>
        </Grid>

        {/* Middle Column (Thinner) */}
        <Grid item xs={5}>
          <ServiceCard height={services[1].height}>
            <Image image={services[1].image} />
            <Overlay />
            <OverlayText>{services[1].name}</OverlayText>
          </ServiceCard>
          <div style={{ marginTop: "16px" }} />
          <ServiceCard height={services[0].height}>
            <Image image={services[0].image} />
            <Overlay />
            <OverlayText>{services[0].name}</OverlayText>
          </ServiceCard>
        </Grid>

        {/* Right Column */}
        <Grid item xs={3}>
          <ServiceCard height={services[2].height}>
            <Image image={services[2].image} />
            <Overlay />
            <OverlayText>{services[2].name}</OverlayText>
          </ServiceCard>
          <div style={{ marginTop: "16px" }} />
          <ServiceCard height={services[5].height}>
            <Image image={services[5].image} />
            <Overlay />
            <OverlayText>{services[5].name}</OverlayText>
          </ServiceCard>
        </Grid>
      </Grid>
    </Box>
  );
}
