import useSWR from "swr";

import { API_BASE_URL, FETCH_OPTIONS } from "@/api/consts";
import { IJokeResponse } from "@/types/IJokeResponse";

async function fetcher() {
  const response = await fetch(API_BASE_URL, FETCH_OPTIONS);

  if (!response.ok) {
    throw new Error("useRandomJoke");
  }

  return response.json() as Promise<IJokeResponse>;
}

export function useRandomJoke() {
  const result = useSWR<IJokeResponse, Error>(
    {
      requestKey: "useRandomJoke",
    },
    fetcher
  );

  return result;
}
