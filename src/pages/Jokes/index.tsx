import { useJokes } from "@/api/useJokes";

export function Jokes() {
  const result = useJokes({ page: 1 });

  if (result.error) {
    return <div>Error</div>;
  }

  if (result.isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="Jokes">
      <pre>{JSON.stringify(result.data, null, 2)}</pre>
    </div>
  );
}
