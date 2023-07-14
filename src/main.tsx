import React from "react";
import ReactDOM from "react-dom/client";

import { initSentry } from "@/services/sentry";
import { initAmplitude } from "@/services/amplitude";
import { App } from "@/App";

initSentry();
initAmplitude();

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
