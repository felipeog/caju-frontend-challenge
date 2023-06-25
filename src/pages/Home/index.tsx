import { useJokes } from "@/api/useJokes";
import { PaginatedSearch } from "@/components/PaginatedSearch";
import { Typography } from "@mui/material";

export function Home() {
  const result = useJokes({ term: "" });

  return (
    <div className="Home">
      <Typography variant="h1" textAlign="center" mb={4}>
        Dad Jokes
      </Typography>

      <PaginatedSearch result={result} />
    </div>
  );
}
