import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import Hair from "../../Assets/features/haircuut10.jpg";
import Face from "../../Assets/features/makeup1.jpg";
import Body from "../../Assets/features/makeup2.jpg";
import Nails from "../../Assets/features/makeup3.jpg";
import SkinCare from "../../Assets/features/makeup5.jpg";
import More from "../../Assets/features/makeup5.jpg";

export default function SalonServices() {
  const services = [
    { name: "hair", image: Hair },
    { name: "face", image: Face },
    { name: "body", image: Body },
    { name: "nails", image: Nails },
    { name: "skin care", image: SkinCare },
    { name: "more →", image: More },
  ];

  const ServiceCard = styled("div")(({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "12px",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
    fontWeight: "bold",
    position: "relative",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }));

  const OverlayText = styled(Typography)({
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000",
    textTransform: "capitalize",
    background: "rgba(255, 255, 255, 0.8)",
    padding: "6px 12px",
    borderRadius: "8px",
  });

  return (
    <div
      style={{
        backgroundColor: "#d3d3d3",
        minHeight: "100vh",
        padding: "100px",
      }}
    >
      {/* Services Button */}
      <Button
        variant="outlined"
        style={{
          fontFamily: "Arial",
          borderColor: "black",
          color: "black",
        //   fontSize: "18px",
        //   borderRadius: "0px",
          textTransform: "uppercase",
          fontWeight: "bold",
          marginBottom: "20px",
          '&:hover': {
            borderColor: "black",
            color: "black",   
               
          },
        }}
      >
        services
      </Button>

      {/* Grid Layout */}
      <Grid container spacing={2} justifyContent="center">
        {/* Left Column */}
        <Grid item xs={2}>
          <ServiceCard image={services[0].image}>
            <OverlayText style={{borderRadius:"100px"}}>{services[0].name}</OverlayText>
          </ServiceCard>
          <div style={{ marginTop: "16px" }} />
          <ServiceCard image={services[3].image}>
            <OverlayText>{services[3].name}</OverlayText>
          </ServiceCard>
        </Grid>

        {/* Middle Column (Thinner) */}
        <Grid item xs={5}>
          <ServiceCard image={services[1].image}>
            <OverlayText>{services[1].name}</OverlayText>
          </ServiceCard>
          <div style={{ marginTop: "16px" }} />
          <ServiceCard image={services[4].image}>
            <OverlayText>{services[4].name}</OverlayText>
          </ServiceCard>
        </Grid>

        {/* Right Column */}
        <Grid item xs={3}>
          <ServiceCard image={services[2].image}>
            <OverlayText>{services[2].name}</OverlayText>
          </ServiceCard>
          <div style={{ marginTop: "16px" }} />
          <ServiceCard image={services[5].image}>
            <OverlayText>{services[5].name}</OverlayText>
          </ServiceCard>
        </Grid>
      </Grid>
    </div>
  );
}
