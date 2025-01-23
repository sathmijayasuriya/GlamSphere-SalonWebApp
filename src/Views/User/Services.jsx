import React, { useState } from "react";
import { Box, Typography, Tabs, Tab, Button, Link, Grid, IconButton, Dialog, DialogTitle, DialogContent, DialogActions,  Accordion,
        AccordionSummary,
        AccordionDetails,
   } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import servicesData from "../../data/ServicesData";

export default function Services() {
 
      const [activeTab, setActiveTab] = useState("Hair");
      const [visibleIndex, setVisibleIndex] = useState(0);
      const [selectedService, setSelectedService] = useState(null);
      const [open, setOpen] = useState(false);

    
      const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        setVisibleIndex(0); // Reset carousel to start
      };
    
      const handleNext = () => {
        if (visibleIndex < servicesData[activeTab].length - 4) {
          setVisibleIndex(visibleIndex + 1);
        }
      };
    
      const handlePrev = () => {
        if (visibleIndex > 0) {
          setVisibleIndex(visibleIndex - 1);
        }
      };
      const handleClickOpen = (service) => {
        setSelectedService(service);
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        setSelectedService(null);
      };

  return (
    
    <>
 <Box
        sx={{
          minHeight: "100vh",
          px: "250px",
          marginBottom: "100px",
          py: "50px",
        //   backgroundColor: "rgba(0, 0, 0, 0.21)",
          paddingTop: "100px", // Add space to account for the header
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 3, // Add padding
          }}
        >
          <Typography variant="h3" sx={{ color: "#0d0d0d", marginBottom: 1 }}>
            ALL
          </Typography>
          <Typography sx={{ color: "#0d0d0d" }}>
          SERVICES
          </Typography>
        </Box>
          {/* Tabs with service names*/}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        centered
        textColor="primary"
        indicatorColor="primary"
        sx={{ marginBottom: "30px" }}
      >
        {Object.keys(servicesData).map((service) => (
          <Tab key={service} label={service} value={service} />
        ))}
      </Tabs>
        {/* Carousel */}
        <Box sx={{ position: "relative", 
                   overflow: "hidden",
                   height: "700px", // Set a fixed height for the carousel container
                   alignItems:"center",
                }}>
        <IconButton
           onClick={handlePrev}
           disabled={visibleIndex === 0}
           sx={{
             position: "absolute",
             top: "30%",
             left: "16px", // Add consistent padding
             transform: "translateY(-50%)", // Center vertically
             zIndex: 1,
            //  backgroundColor: "white", // Optional: Add a background to make it visible
             "&:hover": { backgroundColor: "lightgray" }, // Optional hover effect
           }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <Grid container spacing={2} sx={{ paddingX:"60px", overflow: "hidden" }}>
          {servicesData[activeTab]
            .slice(visibleIndex, visibleIndex + 4)
            .map((subService, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    // backgroundColor: "rgba(0, 0, 0, 0.21)",
                    borderRadius: "8px",
                    position: "relative", // Enables absolute positioning for children
                    overflow: "hidden", // Ensures the button doesn't overflow the image
                    // boxShadow: 2,
                    padding: "16px",
                    textAlign: "left",
                  }}
                >
                  <img
                    src={subService.image}
                    alt={subService.title}
                    style={{ width: "100%",
                             height:"150px",
                             borderRadius: "8px",
                             objectFit: "cover",
                            }}
                  />
                  <Typography variant="h6" sx={{ marginTop: "10px" }}>
                    {subService.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "gray", marginBottom: "10px" }}
                  >
                    {subService.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", marginBottom: "10px" }}
                  >
                    {subService.price} | {subService.duration}
                  </Typography>
                  <Link underline="none"
                        color="inherit"
                        onClick={() => handleClickOpen(subService)}
                        sx={{ cursor: "pointer" }}
  
                  >
                    <ReadMoreIcon/>
                  </Link>
                </Box>
              </Grid>
            ))}
        </Grid>
        <IconButton
          onClick={handleNext}
          disabled={
            visibleIndex >= servicesData[activeTab].length - 4
          }
          sx={{  position: "absolute",
            top: "30%",
            right: "16px", // Add consistent padding
            transform: "translateY(-50%)", // Center vertically
            zIndex: 2,
            "&:hover": { backgroundColor: "lightgray" }, // Optional hover effect
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      </Box>
       {/* Dialog for sub-service details */}
 {/* Dialog for sub-service details */}
 <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>{selectedService?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" style={{ marginBottom: "20px" }}>
            {selectedService?.description}
          </Typography>

          {selectedService?.subServices && (
            <div>
              <Typography variant="h6">Sub-Services</Typography>
              {selectedService.subServices.map((subService, index) => (
                <Accordion key={index} style={{ marginBottom: "10px" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{subService.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      {subService.description}
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: "10px" }}>
                      <strong>Price:</strong> {subService.price}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
