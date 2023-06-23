import { useRandomJoke } from "@/api/useRandomJoke";

export function RandomJoke() {
  const result = useRandomJoke();

  if (result.error) {
    return <div>Error</div>;
  }

  if (result.isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="RandomJoke">
      <pre>{JSON.stringify(result.data, null, 2)}</pre>
    </div>
  );
}
