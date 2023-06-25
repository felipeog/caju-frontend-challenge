import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useReadLocalStorage } from "usehooks-ts";

import { JokeItem } from "@/components/JokeItem";
import { STARRED_KEY } from "@/constants/starredKey";
import { STARS_LIMIT } from "@/constants/starsLimit";
import { useJokesById } from "@/api/useJokesById";

export function Starred() {
  const idsFromStorage = useReadLocalStorage<string[]>(STARRED_KEY) ?? [];
  const result = useJokesById({ ids: idsFromStorage });

  if (result.error) {
    return <div>Error</div>;
  }

  if (result.data && !result.data?.length) {
    return <Typography textAlign="center">No starred jokes</Typography>;
  }

  return (
    <div className="Starred">
      <Typography variant="caption" display="block" mb={4} textAlign="center">
        {result?.data?.length ?? "..."} of {STARS_LIMIT} jokes starred
      </Typography>

      {result.isLoading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Stack spacing={4}>
          {result?.data?.map((joke) => (
            <JokeItem key={joke.id} joke={joke} />
          ))}
        </Stack>
      )}

      <Typography variant="caption" display="block" mt={4} textAlign="center">
        Starred jokes are kept in the browser's local storage
      </Typography>
    </div>
  );
}
