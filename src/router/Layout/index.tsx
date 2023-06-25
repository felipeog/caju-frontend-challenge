import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import { Header } from "@/router/Header";

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
