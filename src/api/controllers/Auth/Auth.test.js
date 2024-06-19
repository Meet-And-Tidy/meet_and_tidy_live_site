import Auth from './Auth';

describe('Auth', () => {
  describe('login', () => {
    test('resolves', () => {
      expect(Auth.login()).resolves.toEqual({ token: 'Example-bearer' });
    });
  });
});
