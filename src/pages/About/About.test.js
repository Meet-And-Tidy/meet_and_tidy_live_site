import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testHelper/testHelper';
import About from './About';

describe('About', () => {
  beforeEach(() => {
    renderWithRouter(<About />);
  });
});
