import React, { useEffect, useRef, useState, memo ,Suspense} from "react";
import { Box, Typography, Button } from "@mui/material";
import LazyLoad from "react-lazyload";

// VideoComponent - Lazy loaded video section
const VideoComponent = () => (
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
    >
      <source
        src="https://res.cloudinary.com/dk239jmcl/video/upload/v1737303543/samples/ecommerce/makeupp_ngyvn0.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  </Box>
);

// HeroSection Component - Memoized for better performance
const HeroSection = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Using IntersectionObserver for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <LazyLoad height={200} offset={100}>
        <section
          ref={sectionRef}
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
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#fff",
                marginTop: "2rem",
                marginBottom: "2rem",
                fontWeight: 300,
              }}
            >
              GlameSphere
            </Typography>

            <Button
              variant="outlined"
              sx={{ padding: 2, borderColor: "white", color: "white" }}
            >
              Book Appointment
            </Button>
          </Box>

          {/* Video Component (Lazy-loaded) */}
          <Suspense fallback={<div>Loading Video...</div>}>
            <VideoComponent />
          </Suspense>

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
