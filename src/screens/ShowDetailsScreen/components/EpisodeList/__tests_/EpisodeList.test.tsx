import React from 'react';
import { render } from 'test-utils';

import { mocks } from './mocks';
import { EpisodeList } from '../EpisodeList';
import { showService } from '../../../../../services/show/showService';

describe('EpisodeList', () => {
  test('show all season one episodes at first', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValue({
      seasonNames: ['1', '2'],
      seasons: {
        '1': [mocks.episode1, mocks.episode2],
        '2': [mocks.episode22, mocks.episode23],
      },
    });

    const { getByText, findByText } = render(<EpisodeList show={mocks.show} />);

    await findByText(mocks.episode1.name);

    expect(getByText(mocks.episode1.name)).toBeTruthy();
    expect(getByText(mocks.episode2.name)).toBeTruthy();
  });
});
