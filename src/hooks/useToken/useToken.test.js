import useToken from './useToken';
import { act, renderHook } from '@testing-library/react';

describe('useToken', () => {
  beforeEach(() => {
    localStorage.setItem('token', 'testToken');
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('value should match storage', () => {
    const { result } = renderHook(() => useToken());
    const { token } = result.current;
    expect(token).toEqual(localStorage.getItem('token'));
  });

  it('it should update the token if theres a value passed to setValue', () => {
    const { result } = renderHook(() => useToken());
    const { setToken } = result.current;

    act(() => {
      setToken('banana');
    });

    expect(localStorage.getItem('token')).toEqual('banana');
  });

  it('it should clear the token if no value provided', () => {
    const { result } = renderHook(() => useToken());
    const { setToken } = result.current;

    act(() => {
      setToken(null);
    });

    expect(localStorage.getItem('token')).toEqual(null);
  });

  it('it should set the message value if provided', () => {
    const { result } = renderHook(() => useToken());
    const { setToken } = result.current;

    expect(localStorage.getItem('logout-message')).toBe(null);

    act(() => {
      setToken('something', { title: 'msg', text: 'wow' });
    });

    expect(localStorage.getItem('token')).toEqual('something');
    expect(JSON.parse(localStorage.getItem('logout-message'))).toEqual({
      title: 'msg',
      text: 'wow',
    });
  });
});
