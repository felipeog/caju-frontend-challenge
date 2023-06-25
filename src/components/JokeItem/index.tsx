import { MouseEvent } from "react";
import StarIcon from "@mui/icons-material/Star";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import {
  Box,
  Card,
  CardActionArea,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

import { IJokeResponse } from "@/types/IJokeResponse";
import { IJoke } from "@/types/IJoke";
import { STARRED_KEY } from "@/constants/starredKey";

interface IJokeItemProps {
  joke: IJoke | IJokeResponse;
}

export function JokeItem({ joke }: IJokeItemProps) {
  const [starred, setStarred] = useLocalStorage<string[]>(STARRED_KEY, []);
  const { enqueueSnackbar } = useSnackbar();

  const isStarred = starred.includes(joke.id);

  function handleCopyButtonClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    navigator.clipboard.writeText(joke.joke);
    enqueueSnackbar("Copied to clipboard");
  }

  function handleAddStarButtonClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    setStarred([...starred, joke.id]);
    enqueueSnackbar("Added to starred");
  }

  function handleRemoveStarButtonClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    setStarred(starred.filter((id) => id !== joke.id));
    enqueueSnackbar("Removed from starred");
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
            <IconButton onClick={handleCopyButtonClick}>
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>

          {isStarred ? (
            <Tooltip title="Remove from starred">
              <IconButton onClick={handleRemoveStarButtonClick}>
                <StarIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Add to starred">
              <IconButton onClick={handleAddStarButtonClick}>
                <StarOutlineIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </CardActionArea>
    </Card>
  );
}
