import React from "react";
import HeaderAuth from "../components/Headers/HeaderAuth";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

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
          bgcolor: "background.default",
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
    </>
  );
}
