import * as apiCall from '../../apiCall/apiCall';
import Example from './Example';

describe('Parcel', () => {
  beforeEach(() => {
    jest.spyOn(apiCall, 'default').mockResolvedValue();
  });

  it('should return data', async () => {
    await Example.find();
    expect(apiCall.default).toHaveBeenCalledWith('GET', '/example');
  });
});
