import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/testHelper/testHelper';
import NewsletterModal from './NewsletterModal';

describe('NewsletterModal', () => {
  beforeEach(() => {
    renderWithRouter(<NewsletterModal />);
  });
});
