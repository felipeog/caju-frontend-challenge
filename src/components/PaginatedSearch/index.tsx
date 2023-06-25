import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";

import { JokeItem } from "@/components/JokeItem";
import { IJoke } from "@/types/IJoke";

interface IPaginatedSearchProps {
  result: {
    error: Error | undefined;
    isLoading: boolean;
    jokes: IJoke[];
    reachedEnd: boolean;
    isLoadingMore: boolean;
    loadMore: () => void;
  };
}

export function PaginatedSearch({ result }: IPaginatedSearchProps) {
  if (result.error) {
    return (
      <Typography>
        An error occurred. Please, refresh the page or try again later.
      </Typography>
    );
  }

  if (result.isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!result.jokes?.length) {
    return <Typography textAlign="center">No jokes found</Typography>;
  }

  return (
    <>
      <Stack spacing={4}>
        {result.jokes.map((joke) => (
          <JokeItem key={joke.id} joke={joke} />
        ))}
      </Stack>

      {!result.reachedEnd && (
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="contained"
            onClick={result.loadMore}
            disabled={result.isLoadingMore}
          >
            Load more
          </Button>
        </Box>
      )}
    </>
  );
}
