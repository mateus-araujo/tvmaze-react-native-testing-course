import { showService } from '../showService';
import { showMocks } from 'test/mocks/show';

describe('showService', () => {
  describe('getEpisodes', () => {
    test('should return an episode list with all season names', async () => {
      const groupedEpisodes = await showService.getEpisodes('1');

      expect(groupedEpisodes.seasonNames).toEqual(['1', '2']);
      expect(groupedEpisodes.seasonNames.length).toBe(2);
    });

    test('should return an episode list with the episodes grouped by season', async () => {
      const groupedEpisodes = await showService.getEpisodes('1');

      const season1 = groupedEpisodes.seasons[1];
      const season2 = groupedEpisodes.seasons[2];

      expect(season1[0]).toEqual(showMocks.episode1);
      expect(season1[1]).toEqual(showMocks.episode2);

      expect(season2[0]).toEqual(showMocks.episode22);
      expect(season2[1]).toEqual(showMocks.episode23);
    });
  });
});
