import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testHelper/testHelper';
import Footer from './Footer';

describe('Footer', () => {
  beforeEach(() => {
    renderWithRouter(<Footer />);
  });
});
