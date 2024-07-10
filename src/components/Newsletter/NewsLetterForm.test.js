import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testHelper/testHelper';
import NewsletterForm from './NewsletterForm';

describe('NewsletterForm', () => {
  beforeEach(() => {
    renderWithRouter(<NewsletterForm />);
  });
});
