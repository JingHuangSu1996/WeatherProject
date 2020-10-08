import { openWeatherKey, unsplashKey } from '../../config';

const makeWeatherUrl = ({
  city,
  apiKey = openWeatherKey,
}) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appi=${apiKey}`;

const makeUnsplashUrl = ({
  query,
  page = '1',
  key = unsplashKey.ACCESS_KEY,
}) =>
  `https://api.unsplash.com/search/collections?page=${page}&query=${query}&client_id=${key}`;

export { makeWeatherUrl, makeUnsplashUrl };
