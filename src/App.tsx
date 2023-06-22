import { SWRConfig } from "swr";

import { Home } from "@/pages/Home";

export function App() {
  return (
    <SWRConfig
      value={{
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <Home />
    </SWRConfig>
  );
}
