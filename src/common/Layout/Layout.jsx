import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Layout.scss";
import useToken from "../../hooks/useToken/useToken";
import logo from "../../assets/logo.png";

const Layout = () => {
  const navigate = useNavigate();
  const { token, setToken } = useToken();

  return (
    <div className="layout">
      <header>
        <span className="logo" onClick={() => navigate("/")}>
          <img src={logo} />
          Meet&Tidy
        </span>

        <Link to="/">Home</Link>
        <Link to="/examples">Examples</Link>
        {token ? (
          <>
            <Link to="/protected">Protected</Link>
            <button className="right logout" onClick={() => setToken(null)}>
              Logout
            </button>
          </>
        ) : (
          <Link to="login" className="right">
            Login
          </Link>
        )}
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
