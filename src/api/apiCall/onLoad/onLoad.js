/**
 *
 * @param {XMLHttpRequest} xhr An XMLHttpRequest which has been performed
 * @param {(o: unknown) => void} resolve A function which handles the promise resolution
 * @param {(o: unknown) => void} reject A function which handles the promise rejection
 */
const onLoad = (xhr, resolve, reject) => {
  const json = JSON.parse(xhr.responseText);

  if (xhr.status === 401) {
    localStorage.removeItem('token');
    const msg = { title: 'Session Expired', text: 'Please signin again to continue.' };
    localStorage.setItem('logout-message', JSON.stringify(msg));
    window.dispatchEvent(new StorageEvent('token-change'));
    reject({ ...json, status: xhr.status });
  }

  if (xhr.status < 200 || xhr.status >= 300) reject({ ...json, status: xhr.status });

  const token = xhr.getResponseHeader('Authorization');

  resolve(token ? { ...json, token: token.split(' ')[1] } : json);
};

export default onLoad;
