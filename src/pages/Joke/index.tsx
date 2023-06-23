import { useParams } from "react-router-dom";

import { useJokeById } from "@/api/useJokeById";

export function Joke() {
  const params = useParams();
  const result = useJokeById({ id: params?.jokeId ?? "" });

  if (result.error) {
    return <div>Error</div>;
  }

  if (result.isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="Joke">
      <pre>{JSON.stringify(result.data, null, 2)}</pre>
    </div>
  );
}
