import * as apiCall from '../../apiCall/apiCall';
import ContactUs from './ContactUs';

describe('Parcel', () => {
  beforeEach(() => {
    jest.spyOn(apiCall, 'default').mockResolvedValue();
  });

  it('should return data', async () => {
    await ContactUs.find();
    expect(apiCall.default).toHaveBeenCalledWith('GET', '/contact');
  });
});
