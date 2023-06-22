import useSWR from "swr";

import { IJokes } from "@/types/IJokes";
import { API_BASE_URL } from "@/api/consts";

interface IProps {
  page: number;
}

async function fetcher({ page }: IProps) {
  const res = await fetch(`${API_BASE_URL}/search?page=${page}`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Error listing jokes");
  }

  return res.json() as Promise<IJokes>;
}

export function useJokes(key: IProps) {
  const jokesResults = useSWR<IJokes, Error>(
    {
      requestKey: "useJokes",
      page: key?.page ?? 1,
    },
    fetcher
  );

  return jokesResults;
}
