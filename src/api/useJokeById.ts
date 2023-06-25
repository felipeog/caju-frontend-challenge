import useSWR from "swr";

import { API_BASE_URL, FETCH_OPTIONS } from "@/api/consts";
import { IJokeResponse } from "@/types/IJokeResponse";

interface IProps {
  id: string;
}

async function fetcher({ id }: IProps) {
  const response = await fetch(`${API_BASE_URL}/j/${id}`, FETCH_OPTIONS);

  if (!response.ok) {
    throw new Error("useJokeById");
  }

  return response.json() as Promise<IJokeResponse>;
}

export function useJokeById(key: IProps) {
  const result = useSWR<IJokeResponse, Error>(
    {
      requestKey: "useJokeById",
      id: key?.id ?? "",
    },
    fetcher
  );

  return result;
}
