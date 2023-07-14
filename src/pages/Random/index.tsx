import { Box, Button, CircularProgress } from "@mui/material";

import { useRandomJoke } from "@/api/useRandomJoke";
import { JokeItem } from "@/components/JokeItem";
import { amplitude } from "@/services/amplitude";

export function Random() {
  const result = useRandomJoke();

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

  function handleNewButtonClick() {
    result.mutate();
    amplitude.track("New joke");
  }

  return (
    <div className="Random">
      <JokeItem joke={result.data} />

      <Box display="flex" justifyContent="center" mt={4}>
        <Button
          variant="contained"
          onClick={handleNewButtonClick}
          disabled={result.isValidating}
        >
          New joke
        </Button>
      </Box>
    </div>
  );
}
