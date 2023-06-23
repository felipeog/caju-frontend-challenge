import { Routes, Route } from "react-router-dom";

import { About } from "@/pages/About";
import { Home } from "@/pages/Home";
import { Joke } from "@/pages/Joke";
import { Jokes } from "@/pages/Jokes";
import { JokeSearch } from "@/pages/JokeSearch";
import { RandomJoke } from "@/pages/RandomJoke";
import { Layout } from "@/router/Layout";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="jokes" element={<Jokes />} />
        <Route path="random-joke" element={<RandomJoke />} />
        <Route path="joke-search" element={<JokeSearch />} />
        <Route path="joke/:jokeId" element={<Joke />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<p>404 - Página não encontrada</p>} />
      </Route>
    </Routes>
  );
}

export { Router };
