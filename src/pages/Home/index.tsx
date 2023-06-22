import { Typography } from "@mui/material";

import { useJokes } from "@/api/useJokes";
import { useRandomJoke } from "@/api/useRandomJoke";
import { useJokeById } from "@/api/useJokeById";
import { useJokesByTerm } from "@/api/useJokesByTerm";

export function Home() {
  const randomJokeResult = useRandomJoke();
  const jokeByIdResult = useJokeById({ id: "Ht49xX8xXDd" });
  const jokesByTermResult = useJokesByTerm({ term: "hello world", page: 1 });
  const jokesResult = useJokes({ page: 2 });

  if (
    randomJokeResult.error ||
    jokeByIdResult.error ||
    jokesByTermResult.error ||
    jokesResult.error
  ) {
    return <div>error</div>;
  }

  if (
    randomJokeResult.isLoading ||
    jokeByIdResult.isLoading ||
    jokesByTermResult.isLoading ||
    jokesResult.isLoading
  ) {
    return <div>loading</div>;
  }

  return (
    <div>
      <Typography variant="h5">randomJokeResult</Typography>
      <pre>{JSON.stringify(randomJokeResult.data, null, 2)}</pre>
      <br />
      <Typography variant="h5">jokeByIdResult</Typography>
      <pre>{JSON.stringify(jokeByIdResult.data, null, 2)}</pre>
      <br />
      <Typography variant="h5">jokesByTermResult</Typography>
      <pre>{JSON.stringify(jokesByTermResult.data, null, 2)}</pre>
      <br />
      <Typography variant="h5">jokesResult</Typography>
      <pre>{JSON.stringify(jokesResult.data, null, 2)}</pre>
    </div>
  );
}
