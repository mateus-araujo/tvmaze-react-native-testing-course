import { Episode } from '../../../models/EpisodeModel';

export const episode1: Episode = {
  id: 1,
  url: 'https://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot',
  name: 'Pilot',
  season: 1,
  number: 1,
  type: 'regular',
  airdate: '2013-06-24',
  airtime: '22:00',
  airstamp: '2013-06-25T02:00:00+00:00',
  runtime: 60,
  rating: { average: 7.7 },
  image: {
    medium:
      'https://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg',
  },
  summary:
    "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
  _links: {
    self: { href: 'https://api.tvmaze.com/episodes/1' },
  },
};

export const episode2: Episode = {
  id: 2,
  url: 'https://www.tvmaze.com/episodes/2/under-the-dome-1x02-the-fire',
  name: 'The Fire',
  season: 1,
  number: 2,
  type: 'regular',
  airdate: '2013-07-01',
  airtime: '22:00',
  airstamp: '2013-07-02T02:00:00+00:00',
  runtime: 60,
  rating: { average: 7.3 },
  image: {
    medium:
      'https://static.tvmaze.com/uploads/images/medium_landscape/1/4389.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/1/4389.jpg',
  },
  summary:
    "<p>While the residents of Chester's Mill face the uncertainty of life in the dome, panic is heightened when a house goes up in flames and their fire department is outside of the dome.</p>",
  _links: {
    self: { href: 'https://api.tvmaze.com/episodes/2' },
  },
};

export const episode22: Episode = {
  id: 855107,
  url: 'https://www.tvmaze.com/episodes/855107/kirby-buckets-2x22-torched',
  name: 'Torched',
  season: 2,
  number: 22,
  type: 'regular',
  airdate: '2016-07-25',
  airtime: '20:00',
  airstamp: '2016-07-26T00:00:00+00:00',
  runtime: 30,
  rating: { average: null },
  image: {
    medium:
      'https://static.tvmaze.com/uploads/images/medium_landscape/303/759650.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/303/759650.jpg',
  },
  summary:
    '<p>Olympic fever hits Forest Hills and everyone excitedly waits for the Olympic torch to make its journey through town.</p>',
  _links: {
    self: { href: 'https://api.tvmaze.com/episodes/855107' },
  },
};

export const episode23: Episode = {
  id: 880557,
  url: 'https://www.tvmaze.com/episodes/880557/kirby-buckets-2x23-me-time-the-ballad-of-mac-and-mom',
  name: 'Me Time: The Ballad of Mac and Mom',
  season: 2,
  number: 23,
  type: 'regular',
  airdate: '2016-08-15',
  airtime: '12:30',
  airstamp: '2016-08-15T16:30:00+00:00',
  runtime: 30,
  rating: { average: null },
  image: {
    medium:
      'https://static.tvmaze.com/uploads/images/medium_landscape/303/759651.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/303/759651.jpg',
  },
  summary:
    '<p>When Kirby finds out that his mom and Mac McAllister are sworn enemies, he travels back in time to set things right.</p>',
  _links: {
    self: { href: 'https://api.tvmaze.com/episodes/880557' },
  },
};

export const episodesList = [episode1, episode2, episode22, episode23];
