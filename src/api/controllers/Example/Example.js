import apiCall from '../../apiCall/apiCall';

class Example {
  static find() {
    return apiCall('GET', '/example');
  }
}

export default Example;
