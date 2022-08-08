import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/register">Register</Link>
      <Link to="/landing">Landing</Link>
    </nav>
  );
};

export default Navbar;
