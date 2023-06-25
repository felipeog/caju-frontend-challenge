import { Outlet } from "react-router-dom";

import { Header } from "@/router/Header";
import { Container } from "@mui/material";

function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>

      <Container
        component="main"
        sx={{
          my: 4,
        }}
      >
        <Outlet />
      </Container>
    </>
  );
}

export { Layout };
