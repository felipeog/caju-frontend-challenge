import { SWRConfig } from "swr";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { Router } from "@/router/Router";
import { theme } from "@/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme>
        <BrowserRouter>
          <SWRConfig
            value={{
              revalidateIfStale: false,
              revalidateOnFocus: false,
              revalidateOnReconnect: false,
            }}
          >
            <SnackbarProvider>
              <Router />
            </SnackbarProvider>
          </SWRConfig>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}
