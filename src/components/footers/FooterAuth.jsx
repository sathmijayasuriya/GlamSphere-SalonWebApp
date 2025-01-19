import React from 'react'
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  WhatsApp as WhatsAppIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon,
  Room as RoomIcon,
} from "@mui/icons-material";

export default function FooterAuth() {
  return (
    <>
  <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "rgba(189, 135, 135, 0.65)",
        pt: 6,
        pb: 3,
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              sx={{ color: "white", display: "flex", alignItems: "center" }}
            >
              <RoomIcon sx={{ mr: 1 }} />
              Athurugiriya road, Kottawa
            </Typography>
            <Link
              href="mailto:info@company.com"
              underline="none"
              sx={{ color: "rgba(255, 255, 255, 0.65)", mt: 2, display: "inline-block" }}
            >
              glamsphere@gmail.com
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="body2"
              sx={{ color: "rgba(255, 255, 255, 0.45)", mb: 0 }}
            >
              xxxxx
              <br />
              <br />
              xxxx:{" "}
              <Link
                href="https://google.com/"
                target="_parent"
                sx={{ color: "inherit" }}
              >
                xxx
              </Link>
            </Typography>
          </Grid>
          <Grid item lg={3} xs={5} sx={{ ml: "auto" }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton href="#" sx={{ color: "white" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "white" }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "white" }}>
                <WhatsAppIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "white" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "white" }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </>
  )
}
