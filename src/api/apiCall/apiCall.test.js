import apiCall from './apiCall';

const mockOpen = jest.fn();
const mockSend = jest.fn();
const mockRequestHeader = jest.fn();

export class mockXHR {
  constructor(status = 200, header) {
    this.status = status;
    this.responseText = '{"string": "words"}';
    this.header = header;
  }

  open(verb, url, params) {
    mockOpen(verb, url, params);
  }

  getResponseHeader() {
    return this.header;
  }

  send(params) {
    mockSend(params);
  }

  setRequestHeader(key, val) {
    mockRequestHeader(key, val);
  }

  onload() {}
}

window.XMLHttpRequest = mockXHR;

describe('apiCall', () => {
  afterEach(() => {
    mockOpen.mockClear();
    mockSend.mockClear();
    mockRequestHeader.mockClear();
  });

  it('should open request with correct params', () => {
    apiCall('GET', 'a/url', {});
    expect(mockOpen).toHaveBeenCalledWith('GET', 'http://localhost:3001/a/url', true);
  });

  it('should not add auth if jwt is unavailable', () => {
    localStorage.clear();
    apiCall('GET', 'a/url', {});
    expect(mockRequestHeader).toHaveBeenCalledTimes(1);
    expect(mockRequestHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
  });

  it('should add auth if jwt is available', () => {
    localStorage.setItem('token', 'sometoken');
    apiCall('GET', 'a/url', {});
    expect(mockRequestHeader).toHaveBeenCalledWith('Authorization', 'Bearer sometoken');
  });

  it('should just send if URLSearchParams', () => {
    const data = new URLSearchParams();
    data.append('name', 'jeff');
    apiCall('GET', 'a/url', data);
    expect(mockOpen).toHaveBeenCalledWith('GET', 'http://localhost:3001/a/url?name=jeff', true);
    expect(mockSend).toHaveBeenCalledWith(undefined);
  });

  it('should just send if no data', () => {
    apiCall('GET', 'a/url');
    expect(mockOpen).toHaveBeenCalledWith('GET', 'http://localhost:3001/a/url', true);
    expect(mockSend).toHaveBeenCalledWith(undefined);
  });

  it('should send non-stringified data if form data present', () => {
    const data = new FormData();
    data.append('name', 'something');
    data.append('other', 'thing');
    apiCall('GET', 'a/url', data);
    expect(mockOpen).toHaveBeenCalledWith('GET', 'http://localhost:3001/a/url', true);
    expect(mockSend).toHaveBeenCalledWith(data);
  });

  it('should send urlencoded form data when string passed', () => {
    const data = 'query=string&data=mine';
    apiCall('GET', 'a/url', data);
    expect(mockOpen).toHaveBeenCalledWith('GET', 'http://localhost:3001/a/url', true);
    expect(mockRequestHeader).toHaveBeenCalledWith(
      'Content-Type',
      'application/x-www-form-urlencoded',
    );
    expect(mockSend).toHaveBeenCalledWith(data);
  });

  it('should send any other request as json', () => {
    const data = { beep: 'boop' };
    apiCall('GET', 'a/url', data);
    expect(mockOpen).toHaveBeenCalledWith('GET', 'http://localhost:3001/a/url', true);
    expect(mockRequestHeader).toHaveBeenCalledWith('Content-Type', 'application/json');
    expect(mockSend).toHaveBeenCalledWith(JSON.stringify(data));
  });
});
