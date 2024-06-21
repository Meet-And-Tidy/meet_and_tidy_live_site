import apiCall from '../../apiCall/apiCall';

class FAQs {
  static find() {
    return apiCall('GET', '/faqs');
  }
}

export default FAQs;
