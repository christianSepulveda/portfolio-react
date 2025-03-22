import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./UI/pages/landing";

document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.backgroundColor = "#000";
document.body.style.overflowX = "hidden";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
