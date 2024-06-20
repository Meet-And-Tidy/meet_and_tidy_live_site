import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testHelper/testHelper';
import FAQs from './FAQs';

describe('FAQs', () => {
  beforeEach(() => {
    renderWithRouter(<FAQs />);
  });

  // it('renders', () => {
  //   expect(screen.getByText('About 0')).toBeTruthy();
  //   expect(screen.getByText('About 19')).toBeTruthy();
  // });
});
