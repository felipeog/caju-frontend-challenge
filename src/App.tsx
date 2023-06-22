import { SWRConfig } from "swr";
import { ThemeProvider } from "@mui/material";

import { Home } from "@/pages/Home";
import { theme } from "@/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig
        value={{
          revalidateIfStale: false,
          revalidateOnFocus: false,
          revalidateOnReconnect: false,
        }}
      >
        <Home />
      </SWRConfig>
    </ThemeProvider>
  );
}
