import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testHelper/testHelper';
import About from './About';

describe('About', () => {
  beforeEach(() => {
    renderWithRouter(<About />);
  });

  // it('renders', () => {
  //   expect(screen.getByText('About 0')).toBeTruthy();
  //   expect(screen.getByText('About 19')).toBeTruthy();
  // });
});
