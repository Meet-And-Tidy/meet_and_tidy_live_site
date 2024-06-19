class Auth {
  static login() {
    //usually this would actually call apiCall, but for this example we just set token
    return Promise.resolve({ token: 'Example-bearer' });
  }
}

export default Auth;
