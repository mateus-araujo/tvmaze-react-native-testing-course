import React, { ReactChildren } from 'react';
import { render } from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import { mocks } from './mocks';
import { EpisodeList } from '../EpisodeList';
import { showService } from '../../../../../services/show/showService';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});
const wrapper = ({ children }: { children: ReactChildren }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('EpisodeList', () => {
  test('show all season one episodes at first', async () => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValue({
      seasonNames: ['1', '2'],
      seasons: {
        '1': [mocks.episode1, mocks.episode2],
        '2': [mocks.episode22, mocks.episode23],
      },
    });

    const { getByText, findByText } = render(
      <EpisodeList show={mocks.show} />,
      {
        wrapper,
      },
    );

    await findByText(mocks.episode1.name);

    expect(getByText(mocks.episode1.name)).toBeTruthy();
    expect(getByText(mocks.episode2.name)).toBeTruthy();
  });
});
