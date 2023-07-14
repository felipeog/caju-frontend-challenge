import { ChangeEvent, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useDebounce } from "usehooks-ts";

import { useJokes } from "@/api/useJokes";
import { PaginatedSearch } from "@/components/PaginatedSearch";
import { amplitude } from "@/services/amplitude";

export function Search() {
  const [term, setTerm] = useState("");
  const debouncedTerm = useDebounce(term, 500);
  const result = useJokes({ term: debouncedTerm });

  function handleTermInputChange(event: ChangeEvent<HTMLInputElement>) {
    setTerm(event.target.value);
    amplitude.track("Search", {
      term: event.target.value,
    });
  }

  return (
    <div className="Search">
      <TextField
        value={term}
        onChange={handleTermInputChange}
        label='Search for a term, e.g. "hipster"'
        fullWidth
      />

      <Box mt={4}>
        {debouncedTerm ? (
          <PaginatedSearch result={result} />
        ) : (
          <Typography textAlign="center">
            Start typing to search for jokes
          </Typography>
        )}
      </Box>
    </div>
  );
}
