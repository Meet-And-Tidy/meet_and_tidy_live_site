import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testHelper/testHelper';
import ExampleIndex from './ExampleIndex';

describe('ExampleIndex', () => {
  beforeEach(() => {
    renderWithRouter(<ExampleIndex />);
  });

  it('renders', () => {
    expect(screen.getByText('Example 0')).toBeTruthy();
    expect(screen.getByText('Example 19')).toBeTruthy();
  });
});
