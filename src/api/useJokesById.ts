import useSWR from "swr";

import { API_BASE_URL, FETCH_OPTIONS } from "@/api/consts";
import { IJokeResponse } from "@/types/IJokeResponse";

interface IProps {
  ids: string[];
}

async function fetcher({ ids }: IProps) {
  const data: IJokeResponse[] = [];

  for (let index = 0; index < ids.length; index++) {
    const id = ids[index];
    const response = await fetch(`${API_BASE_URL}/j/${id}`, FETCH_OPTIONS);

    if (!response.ok) {
      throw new Error("useJokeById");
    }

    const joke: IJokeResponse = await response.json();

    data.push(joke);
  }

  return new Promise((resolve) => resolve(data)) as Promise<IJokeResponse[]>;
}

export function useJokesById(key: IProps) {
  const result = useSWR<IJokeResponse[], Error>(
    {
      requestKey: "useJokeById",
      ids: key?.ids ?? [],
    },
    fetcher
  );

  return result;
}
