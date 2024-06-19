import { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router';
import Auth from '../../api/controllers/Auth/Auth';
import useToken from '../../hooks/useToken/useToken';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { setToken } = useToken();

  const login = e => {
    e.preventDefault();
    e.stopPropagation();
    Auth.login({ email, password })
      .then(({ token }) => {
        setToken(token);
        navigate('/');
      })
      .catch(setError);
  };
  return (
    <div className="login">
      <Breadcrumbs>
        <Link to="/login">Login</Link>
      </Breadcrumbs>
      <form className="content" onSubmit={login}>
        <h3>Login</h3>
        {error && <p>{JSON.stringify(error)}</p>}
        <label>Email</label>
        <input
          autoFocus
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
