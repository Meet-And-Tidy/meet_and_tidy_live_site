import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

test('renders Yozu React Skeleton Text', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  expect(screen.getByText('Yozu React Skeleton')).toBeInTheDocument();
});
