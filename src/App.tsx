import { useMemo } from "react";
import { SWRConfig } from "swr";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { Router } from "@/router/Router";

export function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

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
