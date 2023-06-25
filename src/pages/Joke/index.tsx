import { Box, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";

import { useJokeById } from "@/api/useJokeById";
import { JokeItem } from "@/components/JokeItem";

export function Joke() {
  const params = useParams();
  const result = useJokeById({ id: params?.jokeId ?? "" });

  if (result.error) {
    return <div>Error</div>;
  }

  if (result.isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!result.data) {
    return null;
  }

  return (
    <div className="Joke">
      <JokeItem joke={result.data} />
    </div>
  );
}
