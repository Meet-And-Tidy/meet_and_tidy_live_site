import apiCall from '../../apiCall/apiCall';

class About {
  static find() {
    return apiCall('GET', '/about');
  }
}

export default About;
