import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import authRouter from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Theme from "./Theme/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <RouterProvider router={authRouter} />
    </ThemeProvider>
  </React.StrictMode>
);
