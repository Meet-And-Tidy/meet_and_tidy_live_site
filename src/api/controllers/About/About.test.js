import * as apiCall from '../../apiCall/apiCall';
import About from './About';

describe('Parcel', () => {
  beforeEach(() => {
    jest.spyOn(apiCall, 'default').mockResolvedValue();
  });

  it('should return data', async () => {
    await About.find();
    expect(apiCall.default).toHaveBeenCalledWith('GET', '/about');
  });
});
