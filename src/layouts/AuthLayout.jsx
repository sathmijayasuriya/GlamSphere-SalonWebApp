import React from "react";
import HeaderAuth from "../components/Headers/HeaderAuth";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import FooterAuth from "../components/footers/FooterAuth";
import { Grid2, Box } from "@mui/material";

export default function AuthLayout() {
  return (
    <>
      <CssBaseline />
      <HeaderAuth />
      <Grid2
        // container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        sx={{
          height: "100%",
          minHeight: "calc(100vh - 64px)",
          // bgcolor: "background.default",
          backgroundColor: "rgba(0, 0, 0, 0.21)",

        }}
      >
        <Box
          sx={{
            height: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Grid2>
      <FooterAuth />

    </>
  );
}
