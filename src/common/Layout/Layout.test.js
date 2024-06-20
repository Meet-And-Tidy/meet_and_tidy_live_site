import { cleanup, screen } from '@testing-library/react';
import * as useToken from '../../hooks/useToken/useToken';
import { renderWithRouter } from '../../utils/testHelper/testHelper';
import Layout from './Layout';
import userEvent from '@testing-library/user-event';
import * as reactRouter from 'react-router';

const mockSetToken = jest.fn();
const mockNavigate = jest.fn();

describe('Layout', () => {
  beforeEach(() => {
    jest.spyOn(useToken, 'default').mockReturnValue({ token: null });
    jest.spyOn(reactRouter, 'useNavigate').mockReturnValue(mockNavigate);
    renderWithRouter(<Layout />);
  });

  test('renders', () => {
    expect(screen.getByText('React Skeleton')).toBeTruthy();
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('About')).toBeTruthy();
  });

  test('navigates home when logo clicked', async () => {
    userEvent.click(screen.getByText('React Skeleton'));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  describe('Has token', () => {
    beforeEach(() => {
      cleanup();
      jest
        .spyOn(useToken, 'default')
        .mockReturnValue({ token: 'someToken', setToken: mockSetToken });
      renderWithRouter(<Layout />);
    });

    test('displays logout', () => {
      expect(screen.getByText('Logout')).toBeTruthy();
    });

    test('displays protected routes', () => {
      expect(screen.getByText('Protected')).toBeTruthy();
    });

    test('does not display login', () => {
      expect(screen.queryByText('Login')).toBeFalsy();
    });

    test('clears token when logout pressed', async () => {
      await userEvent.click(screen.getByText('Logout'));
      expect(mockSetToken).toHaveBeenCalledWith(null);
    });
  });

  describe('no token', () => {
    beforeEach(() => {
      cleanup();
      jest.spyOn(useToken, 'default').mockReturnValue({ token: null });
      renderWithRouter(<Layout />);
    });

    test('does not display logout', () => {
      expect(screen.queryByText('Logout')).toBeFalsy();
    });

    test('doesnt display protected routes', () => {
      expect(screen.queryByText('Protected')).toBeFalsy();
    });

    test('displays login', () => {
      expect(screen.getByText('Login')).toBeTruthy();
    });
  });
});
