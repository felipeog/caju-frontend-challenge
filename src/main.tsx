import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";

import { App } from "./App";
import "./index.css";

Sentry.init({
  dsn: "https://b611ea6bbdec4e0c860d62681b2fcb96@o4505404629647360.ingest.sentry.io/4505405767286784",
  integrations: [
    new Sentry.BrowserTracing({
      tracePropagationTargets: ["localhost", "felipeog-jokes.netlify.app"],
    }),
    new Sentry.Replay(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
});

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
