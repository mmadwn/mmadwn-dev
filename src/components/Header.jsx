import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-8">
      <div className="mb-4">
        <Link to="/" className="text-xl font-bold">Home</Link>
      </div>

      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/interest">Interest</Link>
          </li>
          <li>
            <Link to="/awards">Awards</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
