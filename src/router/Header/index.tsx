import { useMemo } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { Container, Tab, Tabs } from "@mui/material";

const ROUTE_PATTERNS = ["/", "/random", "/search", "/about", "/starred"];

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
    <Container
      className="Header"
      component="nav"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      fixed
    >
      <Tabs value={currentTab}>
        <Tab label="Dad Jokes" value="/" to="/" component={Link} />
        <Tab label="Random" value="/random" to="/random" component={Link} />
        <Tab label="Search" value="/search" to="/search" component={Link} />
        <Tab label="Starred" value="/starred" to="/starred" component={Link} />
        <Tab label="About" value="/about" to="/about" component={Link} />
      </Tabs>
    </Container>
  );
}

export { Header };
