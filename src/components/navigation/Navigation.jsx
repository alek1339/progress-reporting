import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/export-format">Export Format</Link>
        </li>
        <li>
          <Link to="/result">Result</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
