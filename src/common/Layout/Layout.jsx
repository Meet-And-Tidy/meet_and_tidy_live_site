import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Layout.scss";
import logo from "../../assets/logo.png";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <div className="layout">
      <header>
        <span className="logo" onClick={() => navigate("/")}>
          <img src={logo} />
        </span>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/faqs">FAQs</Link>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
