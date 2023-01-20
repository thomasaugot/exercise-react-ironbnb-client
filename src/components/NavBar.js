import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navBar">
        <NavLink to="/" className="navLink">Home</NavLink>
        <NavLink to="/apartments" className="navLink">Apartments</NavLink>
        <NavLink to="/apartments/create" className="navLink">Create</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
