import * as apiCall from '../../apiCall/apiCall';
import FAQs from './FAQs';

describe('Parcel', () => {
  beforeEach(() => {
    jest.spyOn(apiCall, 'default').mockResolvedValue();
  });

  it('should return data', async () => {
    await FAQs.find();
    expect(apiCall.default).toHaveBeenCalledWith('GET', '/faqs');
  });
});
