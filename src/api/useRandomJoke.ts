import useSWR from "swr";

import { IJoke } from "@/types/IJoke";
import { API_BASE_URL } from "@/api/consts";

export const REQUEST_KEYS = {
  randomJoke: "randomJoke",
  jokeById: "jokeById",
  jokesByTerm: "jokesByTerm",
  listJokes: "listJokes",
};

async function fetcher() {
  const res = await fetch(API_BASE_URL, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Error fetching random joke");
  }

  return res.json() as Promise<IJoke>;
}

export function useRandomJoke() {
  const randomJokeResult = useSWR<IJoke, Error>(
    {
      requestKey: "useRandomJoke",
    },
    fetcher
  );

  return randomJokeResult;
}
