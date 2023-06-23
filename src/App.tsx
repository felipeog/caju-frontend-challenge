import { SWRConfig } from "swr";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import { theme } from "@/theme";
import { Router } from "@/router/Router";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SWRConfig
          value={{
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
          }}
        >
          <Router />
        </SWRConfig>
      </BrowserRouter>
    </ThemeProvider>
  );
}
