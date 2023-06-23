import { Outlet } from "react-router-dom";

import { Header } from "@/router/Header";

function Layout() {
  return (
    <div className="Layout">
      <Header />

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export { Layout };
