import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ContextAPI } from "./context/ContextAPI";

import "react-alice-carousel/lib/alice-carousel.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ContextAPI>
        <App />
      </ContextAPI>
    </BrowserRouter>
  </StrictMode>
);
