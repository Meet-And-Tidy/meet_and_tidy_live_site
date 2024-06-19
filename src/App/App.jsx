import { useEffect } from 'react';
import './App.scss';
import useToken from '../hooks/useToken/useToken';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../common/Layout/Layout';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import ExampleIndex from '../pages/ExampleIndex/ExampleIndex';
import ExampleShow from '../pages/ExampleShow/ExampleShow';
import Protected from '../pages/Protected/Protected';

const App = () => {
  const { token, setToken } = useToken();

  const checkToken = e => {
    if (e.key === 'token') setToken(e.newValue);
  };

  const handleTokenChangeEvent = e => {
    if (e.detail) localStorage.setItem('logout-message', JSON.stringify(e.detail));
  };

  /*
   * Handles when another tab clears the token
   */
  useEffect(() => {
    window.addEventListener('storage', checkToken);
    window.addEventListener('token-change-message', handleTokenChangeEvent);

    return () => {
      window.removeEventListener('storage', checkToken);
      window.removeEventListener('token-change-message', handleTokenChangeEvent);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {!token && <Route path="login" element={<Login />} />}
          <Route path="/" element={<Home />} />
          <Route path="examples">
            <Route index element={<ExampleIndex />} />
            <Route path=":id" element={<ExampleShow />} />
          </Route>
          {token && <Route path="protected" element={<Protected />} />}
          <Route path="*" element={<div className="404">404 Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
