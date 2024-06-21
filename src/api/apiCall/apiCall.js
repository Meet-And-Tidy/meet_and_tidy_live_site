import onLoad from './onLoad/onLoad';
/**
 *
 * @param {'GET' | 'POST' | 'PUT' | 'DELETE'} verb The request
 * @param {String} path The url to send to
 * @param {URLSearchParams | FormData | object | string} data The data to send
 * @returns {Promise} A promise which resolves on success or rejects on failure
 */
const apiCall = (verb, path, data) => {
  const jwt = localStorage.getItem('token');

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const server = process.env.REACT_APP_API_SERVER;

    let url = [server, path].join('/');
    if (data instanceof URLSearchParams) url = [url, data].join('?');

    xhr.open(verb, url, true);
    if (jwt) xhr.setRequestHeader('Authorization', `Bearer ${jwt}`);

    if (!data || data instanceof URLSearchParams) {
      xhr.send();
    } else if (data instanceof FormData) {
      xhr.send(data);
    } else if (typeof data === 'string') {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(data);
    } else {
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(data));
    }

    xhr.onload = () => onLoad(xhr, resolve, reject);

    xhr.onabort = () => reject({ error: 'Request aborted.' });
    xhr.ontimeout = () => reject({ error: 'Request timed out.' });
  });
};

export default apiCall;
