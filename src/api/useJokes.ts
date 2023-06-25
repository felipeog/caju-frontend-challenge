import { useCallback } from "react";
import useSWRInfinite from "swr/infinite";

import { API_BASE_URL, FETCH_OPTIONS } from "@/api/consts";
import { PAGE_SIZE } from "@/constants/pageSize";
import { IJoke } from "@/types/IJoke";
import { IJokesResponse } from "@/types/IJokesResponse";

interface IFetcherProps {
  page?: number;
  term?: string;
}

interface IHookProps {
  term?: string;
}

async function fetcher({ page = 1, term = "" }: IFetcherProps) {
  const response = await fetch(
    `${API_BASE_URL}/search?page=${page}&limit=${PAGE_SIZE}&term=${term}`,
    FETCH_OPTIONS
  );

  if (!response.ok) {
    throw new Error("useJokes");
  }

  return response.json() as Promise<IJokesResponse>;
}

export function useJokes(props: IHookProps) {
  const result = useSWRInfinite<IJokesResponse, Error>(getKey, fetcher, {
    revalidateAll: false,
    revalidateFirstPage: false,
  });

  const data = result?.data ?? [];
  const jokes = data.reduce((jokes: IJoke[], page) => {
    if (!page?.results?.length) {
      return jokes;
    }

    return [...jokes, ...page.results];
  }, []);
  const reachedEnd = Number(data[data.length - 1]?.results?.length) < PAGE_SIZE;

  const loadMore = useCallback(() => {
    result.setSize(result.size + 1);
  }, [result]);

  function getKey(pageIndex: number) {
    const term = props?.term ?? "";

    return {
      requestKey: "useJokes",
      page: pageIndex + 1,
      term,
    };
  }

  return {
    ...result,
    jokes,
    reachedEnd,
    isLoadingMore: !result.isLoading && result.isValidating,
    loadMore,
  };
}
