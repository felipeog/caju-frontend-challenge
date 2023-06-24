import { useRandomJoke } from "@/api/useRandomJoke";

export function Random() {
  const result = useRandomJoke();

  if (result.error) {
    return <div>Error</div>;
  }

  if (result.isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="Random">
      <pre>{JSON.stringify(result.data, null, 2)}</pre>
    </div>
  );
}
