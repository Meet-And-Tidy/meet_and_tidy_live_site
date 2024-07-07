import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testHelper/testHelper';
import Newsletter from './Newsletter';

describe('Newsletter', () => {
  beforeEach(() => {
    renderWithRouter(<Newsletter />);
  });
});
