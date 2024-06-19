import { mockXHR } from '../apiCall.test';
import onLoad from './onLoad';

describe('onLoad', () => {
  const resolve = jest.fn();
  const reject = jest.fn();

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Original request succeeds', () => {
    it('should resolve if the status is successful', () => {
      const xhr = new mockXHR();
      onLoad(xhr, resolve, reject);

      expect(resolve).toHaveBeenCalledWith({ string: 'words' });
    });

    it('adds the token to the response if given', () => {
      jest.spyOn(Storage.prototype, 'setItem').mockReturnValue();
      const xhr = new mockXHR(200, 'Bearer sometoken');
      onLoad(xhr, resolve, reject);

      expect(resolve).toHaveBeenCalledWith({ token: 'sometoken', string: 'words' });
    });
  });

  describe('Original Request fails', () => {
    describe('fails due to a 401', () => {
      beforeEach(() => {
        jest.spyOn(Storage.prototype, 'setItem').mockReturnValue();
        jest.spyOn(Storage.prototype, 'removeItem').mockReturnValue();
        jest.spyOn(window, 'dispatchEvent').mockReturnValue();
      });

      it('should set the logout reason to be Session Expired', () => {
        const xhr = new mockXHR(401);
        onLoad(xhr, resolve, reject);

        expect(Storage.prototype.setItem).toHaveBeenCalledWith(
          'logout-message',
          '{"title":"Session Expired","text":"Please signin again to continue."}',
        );
      });

      it('clear the user session', () => {
        const xhr = new mockXHR(401);
        onLoad(xhr, resolve, reject);
        expect(Storage.prototype.removeItem).toHaveBeenCalledWith('token');
      });

      it('dispatches an event for a token change', () => {
        const xhr = new mockXHR(401);
        onLoad(xhr, resolve, reject);

        expect(dispatchEvent).toHaveBeenCalledWith(new StorageEvent('token-change'));
      });
    });

    it.each([400, 300, 188, 502, 500])('should reject if the status (%s) is a failure', status => {
      const xhr = new mockXHR(status);
      onLoad(xhr, resolve, reject);

      expect(reject).toHaveBeenCalledWith({ status, string: 'words' });
    });
  });
});
