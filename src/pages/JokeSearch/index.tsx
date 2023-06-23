import { useJokesByTerm } from "@/api/useJokesByTerm";

export function JokeSearch() {
  const result = useJokesByTerm({ term: "hipster", page: 1 });

  if (result.error) {
    return <div>Error</div>;
  }

  if (result.isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="JokeSearch">
      <pre>{JSON.stringify(result.data, null, 2)}</pre>
    </div>
  );
}
