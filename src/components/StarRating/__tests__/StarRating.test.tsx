import React from 'react';
import { render } from 'test-utils';

import { StarRating } from '../StarRating';

describe('StarRating', () => {
  describe('rating was passed', () => {
    it('shows the rating', () => {
      const { getByText } = render(<StarRating rating={{ average: 7 }} />);

      expect(getByText('7')).toBeDefined();
    });

    it('shows the star icon', () => {
      const { getByTestId } = render(<StarRating rating={{ average: 7 }} />);

      expect(getByTestId('starIcon')).toBeDefined();
    });
  });

  describe('rating was not passed', () => {
    it('returns nothing', () => {
      const { container } = render(<StarRating />, {
        wrapper: undefined,
      });

      expect(container.children.length).toEqual(0);
    });
  });
});
