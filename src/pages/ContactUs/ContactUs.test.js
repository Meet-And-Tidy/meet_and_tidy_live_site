import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testHelper/testHelper';
import ContactUs from './ContactUs';

describe('ContactUs', () => {
  beforeEach(() => {
    renderWithRouter(<ContactUs />);
  });
});
