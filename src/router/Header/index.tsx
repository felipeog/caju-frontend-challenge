import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="Header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/jokes">Jokes</Link>
        </li>

        <li>
          <Link to="/random-joke">Random joke</Link>
        </li>

        <li>
          <Link to="/joke-search">Joke search</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export { Header };
