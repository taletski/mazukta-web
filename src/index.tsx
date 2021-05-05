import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import { CreatorServiceProvider } from "services/CreatorService/CreatorService.reactAPI";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CreatorServiceProvider>
        <App />
      </CreatorServiceProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
