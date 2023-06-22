import useSWR from "swr";

import { IJokes } from "@/types/IJokes";
import { API_BASE_URL } from "@/api/consts";

interface IProps {
  term: string;
  page: number;
}

async function fetcher({ term, page }: IProps) {
  const res = await fetch(`${API_BASE_URL}/search?term=${term}&page=${page}`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Error searching joke");
  }

  return res.json() as Promise<IJokes>;
}

export function useJokesByTerm(key: IProps) {
  const jokesByTermResults = useSWR<IJokes, Error>(
    {
      requestKey: "useJokesByTerm",
      term: String(key?.term) ?? "",
      page: Number(key?.page) ?? 1,
    },
    fetcher
  );

  return jokesByTermResults;
}
