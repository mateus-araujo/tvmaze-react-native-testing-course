import { rest } from 'msw';
import { BASE_URL } from 'src/services/api';
import { showMocks } from 'test/mocks/show';

export const handlers = [
  rest.get(`${BASE_URL}shows/:showId/episodes`, (req, res, ctx) => {
    return res(ctx.json(showMocks.episodesList));
  }),
];
