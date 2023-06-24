import { useMemo } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";

const ROUTE_PATTERNS = [
  "/",
  "/jokes",
  "/random",
  "/search",
  "/about",
  "/starred",
];

function Header() {
  const location = useLocation();

  const currentTab = useMemo(() => {
    const currentPattern = ROUTE_PATTERNS.find((pattern) =>
      matchPath(pattern, location.pathname)
    );
    const match = matchPath(currentPattern ?? "", location.pathname);

    return match ? match?.pattern?.path : false;
  }, [location.pathname]);

  return (
    <nav className="Header">
      <Tabs value={currentTab}>
        <Tab label="Home" value="/" to="/" component={Link} />
        <Tab label="Jokes" value="/jokes" to="/jokes" component={Link} />
        <Tab label="Random" value="/random" to="/random" component={Link} />
        <Tab label="Search" value="/search" to="/search" component={Link} />
        <Tab label="About" value="/about" to="/about" component={Link} />
        <Tab label="Starred" value="/starred" to="/starred" component={Link} />
      </Tabs>
    </nav>
  );
}

export { Header };
