import useSWR from "swr";

import { IJoke } from "@/types/IJoke";
import { API_BASE_URL } from "@/api/consts";

interface IProps {
  ids: string[];
}

async function fetcher({ ids }: IProps) {
  const data: IJoke[] = [];

  for (let index = 0; index < ids.length; index++) {
    const id = ids[index];
    const res = await fetch(`${API_BASE_URL}/j/${id}`, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Error fetching jokes by ID");
    }

    const joke: IJoke = await res.json();

    data.push(joke);
  }

  return new Promise((resolve) => resolve(data)) as Promise<IJoke[]>;
}

export function useJokesById(key: IProps) {
  const jokesByIdResult = useSWR<IJoke[], Error>(
    {
      requestKey: "useJokeById",
      ids: key?.ids ?? [],
    },
    fetcher
  );

  return jokesByIdResult;
}
