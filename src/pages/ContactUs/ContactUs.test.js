import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testHelper/testHelper';
import ContactUs from './ContactUs';

describe('ContactUs', () => {
  beforeEach(() => {
    renderWithRouter(<ContactUs />);
  });

  // it('renders', () => {
  //   expect(screen.getByText('About 0')).toBeTruthy();
  //   expect(screen.getByText('About 19')).toBeTruthy();
  // });
});
