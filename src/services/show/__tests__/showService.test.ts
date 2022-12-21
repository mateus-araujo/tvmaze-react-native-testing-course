import { api } from '../../api';
import { showService } from '../showService';
import {
  episode1,
  episode2,
  episode22,
  episode23,
  episodesList,
} from './mocks';

describe('showService', () => {
  describe('getEpisodes', () => {
    beforeAll(() => {
      jest.spyOn(api, 'get').mockResolvedValue({ data: episodesList });
    });

    test('should return an episode list with all season names', async () => {
      const groupedEpisodes = await showService.getEpisodes('1');

      expect(groupedEpisodes.seasonNames).toEqual(['1', '2']);
      expect(groupedEpisodes.seasonNames.length).toBe(2);
    });

    test('should return an episode list with the episodes grouped by season', async () => {
      const groupedEpisodes = await showService.getEpisodes('1');

      const season1 = groupedEpisodes.seasons[1];
      const season2 = groupedEpisodes.seasons[2];

      expect(season1.includes(episode1)).toBeTruthy();
      expect(season1.includes(episode2)).toBeTruthy();

      expect(season2.includes(episode22)).toBeTruthy();
      expect(season2.includes(episode23)).toBeTruthy();
    });
  });
});
