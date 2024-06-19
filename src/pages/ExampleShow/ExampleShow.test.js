import { screen } from '@testing-library/react';
import ExampleShow from './ExampleShow';
import * as reactRouter from 'react-router';
import { renderWithRouter } from '../../utils/testHelper/testHelper';

describe('ExampleShow', () => {
  beforeEach(() => {
    jest.spyOn(reactRouter, 'useParams').mockReturnValue({ id: 1 });
    renderWithRouter(<ExampleShow />);
  });

  it('renders', () => {
    expect(screen.getByText('Example 1')).toBeTruthy();
  });
});
