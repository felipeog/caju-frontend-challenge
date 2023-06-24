import React from "react";
import ReactDOM from "react-dom/client";

import { initSentry } from "@/services/sentry";
import { App } from "@/App";

initSentry();

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
