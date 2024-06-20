import { Link, Outlet } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>    
      <nav>
        <header>
          <span className="logo">
            <img src={logo} />
          </span>
        </header>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );

};

export default Navbar;
