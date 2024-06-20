import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testHelper/testHelper';
import NewsletterForm from './Footer';

describe('NewsletterForm', () => {
  beforeEach(() => {
    renderWithRouter(<NewsletterForm />);
  });
});
