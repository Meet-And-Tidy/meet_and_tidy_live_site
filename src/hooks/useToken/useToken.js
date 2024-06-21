import { useSyncExternalStore } from 'react';

const subscribe = callback => {
  window.addEventListener('token-change', callback);
  return () => {
    window.removeEventListener('token-change', callback);
  };
};

const messageSubscribe = callback => {
  window.addEventListener('token-change', callback);
  return () => {
    window.removeEventListener('token-change', callback);
  };
};

// Return the current value from the browser API
const getSnapshot = () => localStorage.getItem('token');

// Return the current value from the browser API
const getMessageSnapshot = () => localStorage.getItem('logout-message');

const useToken = () => {
  const item = useSyncExternalStore(subscribe, getSnapshot);
  const message = useSyncExternalStore(messageSubscribe, getMessageSnapshot);

  const token = item;

  const setValue = (v, msg) => {
    if (v === null) {
      localStorage.removeItem('token');
    } else {
      localStorage.setItem('token', v);
    }

    // The event name has to match the eventListeners defined in the subscribe function
    window.dispatchEvent(new StorageEvent('token-change'));
    if (msg) {
      localStorage.setItem('logout-message', JSON.stringify(msg));
      window.dispatchEvent(new StorageEvent('logout-message'));
    }
  };

  return { token, setToken: setValue, message };
};

export default useToken;
