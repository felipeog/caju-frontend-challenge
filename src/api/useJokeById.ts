import useSWR from "swr";

import { IJoke } from "@/types/IJoke";
import { API_BASE_URL } from "@/api/consts";

interface IProps {
  id: string;
}

async function fetcher({ id }: IProps) {
  const res = await fetch(`${API_BASE_URL}/j/${id}`, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Error fetching joke by ID");
  }

  return res.json() as Promise<IJoke>;
}

export function useJokeById(key: IProps) {
  const jokeByIdResult = useSWR<IJoke, Error>(
    {
      requestKey: "useJokeById",
      id: key?.id ?? "",
    },
    fetcher
  );

  return jokeByIdResult;
}
