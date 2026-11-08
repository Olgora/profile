import React from "react";
// @ts-ignore: error message
// eslint-disable-next-line
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
