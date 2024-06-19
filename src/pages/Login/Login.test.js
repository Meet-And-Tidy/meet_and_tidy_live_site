import { cleanup, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import * as reactRouter from 'react-router';
import Login from './Login';
import userEvent from '@testing-library/user-event';
import * as useToken from '../../hooks/useToken/useToken';
import Auth from '../../api/controllers/Auth/Auth';

const mockNavigate = jest.fn();
const mockSetToken = jest.fn();

describe('Login', () => {
  beforeEach(() => {
    jest.spyOn(reactRouter, 'useNavigate').mockReturnValue(mockNavigate);
    jest.spyOn(useToken, 'default').mockReturnValue({ setToken: mockSetToken });
    jest.spyOn(Auth, 'login').mockResolvedValue({ token: 'someToken' });

    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
  });

  test('renders', () => {
    expect(screen.getAllByText('Login')).toHaveLength(3);
  });

  test('navigates back on click', async () => {
    await userEvent.click(screen.getAllByText('Login')[2]);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('calls setToken', async () => {
    await userEvent.click(screen.getAllByText('Login')[2]);
    expect(mockSetToken).toHaveBeenCalledWith('someToken');
  });

  test('can update Email', async () => {
    expect(screen.getByPlaceholderText('Email')).toHaveValue('');
    await userEvent.type(screen.getByPlaceholderText('Email'), 'some text');
    expect(screen.getByPlaceholderText('Email')).toHaveValue('some text');
  });

  test('can update Password', async () => {
    expect(screen.getByPlaceholderText('Password')).toHaveValue('');
    await userEvent.type(screen.getByPlaceholderText('Password'), 'some text');
    expect(screen.getByPlaceholderText('Password')).toHaveValue('some text');
  });

  describe('Login fails', () => {
    beforeEach(() => {
      cleanup();
      jest.spyOn(Auth, 'login').mockRejectedValue({ error: 'SOME_ERROR' });

      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>,
      );
    });

    test('displays the login error', async () => {
      await userEvent.click(screen.getAllByText('Login')[2]);
      expect(await screen.findByText('{"error":"SOME_ERROR"}')).toBeTruthy();
    });
  });
});
