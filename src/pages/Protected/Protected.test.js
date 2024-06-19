import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Protected from './Protected';

describe('Protected', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Protected />
      </BrowserRouter>,
    );
  });

  test('renders', () => {
    expect(screen.getByText('You are logged in so you can see this page')).toBeInTheDocument();
  });
});
