import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testHelper/testHelper';
import FAQs from './FAQs';

describe('FAQs', () => {
  beforeEach(() => {
    renderWithRouter(<FAQs />);
  });
});
