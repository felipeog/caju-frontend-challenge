import { IJoke } from "@/types/IJoke";

export interface IJokesResponse {
  current_page: number;
  limit: number;
  next_page: number;
  previous_page: number;
  results: IJoke[];
  search_term: string;
  status: number;
  total_jokes: number;
  total_pages: number;
}
