import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="Home">
      <Typography variant="h1" textAlign="center">
        Dad Jokes
      </Typography>

      <Link to="/jokes">Jokes</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
