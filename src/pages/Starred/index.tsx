import { useJokesById } from "@/api/useJokesById";

export function Starred() {
  const result = useJokesById({ ids: ["0189hNRf2g", "08EQZ8EQukb"] });

  return (
    <div className="Starred">
      <pre>{JSON.stringify(result.data, null, 2)}</pre>
    </div>
  );
}
