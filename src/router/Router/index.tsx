import { Routes, Route } from "react-router-dom";

import { About } from "@/pages/About";
import { Home } from "@/pages/Home";
import { Joke } from "@/pages/Joke";
import { Jokes } from "@/pages/Jokes";
import { NotFound } from "@/pages/NotFound";
import { Random } from "@/pages/Random";
import { Search } from "@/pages/Search";
import { Starred } from "@/pages/Starred";
import { Layout } from "@/router/Layout";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="joke/:jokeId" element={<Joke />} />
        <Route path="jokes" element={<Jokes />} />
        <Route path="random" element={<Random />} />
        <Route path="search" element={<Search />} />
        <Route path="starred" element={<Starred />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export { Router };
