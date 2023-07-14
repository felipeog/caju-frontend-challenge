import { MouseEvent } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import {
  Box,
  Card,
  CardActionArea,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { useSnackbar } from "notistack";

import { STARRED_KEY } from "@/constants/starredKey";
import { STARS_LIMIT } from "@/constants/starsLimit";
import { amplitude } from "@/services/amplitude";
import { IJoke } from "@/types/IJoke";
import { IJokeResponse } from "@/types/IJokeResponse";

interface IJokeItemProps {
  joke: IJoke | IJokeResponse;
}

export function JokeItem({ joke }: IJokeItemProps) {
  const [starred, setStarred] = useLocalStorage<string[]>(STARRED_KEY, []);
  const { enqueueSnackbar } = useSnackbar();

  const isStarred = starred.includes(joke.id);
  const reachedLimit = starred.length >= STARS_LIMIT;

  function handleCopyButtonClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    navigator.clipboard.writeText(joke.joke);
    enqueueSnackbar("Copied to clipboard");
    amplitude.track("Copy to clipboard", {
      jokeId: joke.id,
    });
  }

  function handleAddStarButtonClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (reachedLimit) {
      return;
    }

    setStarred([...starred, joke.id]);
    enqueueSnackbar("Added to starred");
    amplitude.track("Add to starred", {
      jokeId: joke.id,
    });
  }

  function handleRemoveStarButtonClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    setStarred(starred.filter((id) => id !== joke.id));
    enqueueSnackbar("Removed from starred");
    amplitude.track("Remove from starred", {
      jokeId: joke.id,
    });
  }

  return (
    <Card>
      <CardActionArea
        to={`/joke/${joke.id}`}
        component={Link}
        disableRipple
        sx={{
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          textDecoration: "none",
        }}
      >
        <Typography>{joke.joke}</Typography>

        <Box
          sx={{
            flexGrow: 0,
            flexShrink: 0,
          }}
        >
          <Tooltip title="Copy to clipboard">
            <span onClick={handleCopyButtonClick}>
              <IconButton>
                <ContentCopyIcon />
              </IconButton>
            </span>
          </Tooltip>

          {isStarred ? (
            <Tooltip title="Remove from starred">
              <span onClick={handleRemoveStarButtonClick}>
                <IconButton>
                  <StarIcon />
                </IconButton>
              </span>
            </Tooltip>
          ) : (
            <Tooltip
              title={
                reachedLimit
                  ? `Limit of ${STARS_LIMIT} stars reached`
                  : "Add to starred"
              }
            >
              <span onClick={handleAddStarButtonClick}>
                <IconButton disabled={reachedLimit}>
                  <StarOutlineIcon />
                </IconButton>
              </span>
            </Tooltip>
          )}
        </Box>
      </CardActionArea>
    </Card>
  );
}
