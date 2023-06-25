import { Typography } from "@mui/material";

import DadJokeMeme from "@/assets/dad-joke-meme.jpg";

export function About() {
  return (
    <div className="About">
      <Typography variant="h1" textAlign="center" mb={4}>
        Dad Jokes
      </Typography>

      <Typography textAlign="center" mb={2}>
        Exact photo description of a dad joke in action
      </Typography>

      <img
        src={DadJokeMeme}
        alt="Dad Jokes"
        style={{
          display: "block",
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto",
        }}
      />
    </div>
  );
}
