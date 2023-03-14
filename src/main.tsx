import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { Notifications } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <Notifications zIndex={300} position="top-right" />
    <App />
  </ThemeProvider>
);
