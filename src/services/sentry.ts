import * as Sentry from "@sentry/react";

export function initSentry() {
  Sentry.init({
    dsn: "https://b611ea6bbdec4e0c860d62681b2fcb96@o4505404629647360.ingest.sentry.io/4505405767286784",
    integrations: [
      new Sentry.BrowserTracing({
        tracePropagationTargets: ["localhost", "felipeog-jokes.netlify.app"],
      }),
      new Sentry.Replay(),
    ],
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 0.1,
  });
}
