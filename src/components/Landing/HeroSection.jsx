import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LazyLoad from 'react-lazyload';
import { memo } from "react";


const HeroSection = memo(() => {
    return (
    <div>
        <LazyLoad height={200} offset={100}>
      <section
        id="hero"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Text Content */}
        <Box
          className="heroText"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 2,
          }}
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              marginTop: "2rem",
              marginBottom: "2rem",
              fontWeight:300
            }}
          >
            GlameSphere
          </Typography>

          {/* <Typography
          variant="body1"
          sx={{ color: "#ccc" }}
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <strong
            style={{
              textDecoration: "underline",
            }}
          >
            website
          </strong>
        </Typography>  */}

          <Button
            variant="outlined"
            sx={{ padding: 2, borderColor: "white", color: "white" }}
          >
            Book Appointment
          </Button>
        </Box>
        <Box
          className="videoWrapper"
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            poster="https://res.cloudinary.com/dk239jmcl/video/upload/v1737303543/samples/ecommerce/makeupp_ngyvn0.mp4"
            loading="lazy"
          >
            <source
              src="https://res.cloudinary.com/dk239jmcl/video/upload/v1737303543/samples/ecommerce/makeupp_ngyvn0.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>

        {/* Overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
      </section>
      </LazyLoad>
    </div>
  );
});

export default HeroSection;