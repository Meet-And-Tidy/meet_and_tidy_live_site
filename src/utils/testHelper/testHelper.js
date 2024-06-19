import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.replaceState({}, '', route);
  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};
