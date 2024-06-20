import apiCall from '../../apiCall/apiCall';

class ContactUs {
  static find() {
    return apiCall('GET', '/contact');
  }
}

export default ContactUs;
