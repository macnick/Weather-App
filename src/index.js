import ui from './ui';
import data from './data';

/* eslint-disable no-unused-vars */
/* eslint-disable no-confusing-arrow */
const control = ((ui, data) => {
  let weatherData;
  let units = 'C';
  const setUnit = (str) => units === 'C' ? 'metric' : 'imperial';
  const input = document.getElementById('search');

  const myWeather = async (city = 'Athens', unit = 'metric') => {
    try {
      const response = await data.getWeather(city, unit);
      ui.renderData(response, units);
      weatherData = await response;
      return response;
    } catch (e) {
      return 'Can not find this city';
    }
  };

  const handleClick = (e) => {
    if (e.target.id === 'units') {
      units = units === 'C' ? 'F' : 'C';
      myWeather(weatherData.name, setUnit(units));
    } else if (e.target.id === 'search') {
      input.value = '';
    } else if (input.value) {
      myWeather(input.value, setUnit(units));
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && input.value) {
      myWeather(input.value, setUnit(units));
    }
  };

  myWeather();
  ui.title('Weather App', 'WOW! a weather app!')
  input.addEventListener('click', handleClick);
  document.getElementById('submit').addEventListener('click', handleClick);
  document.getElementById('units').addEventListener('click', handleClick);

  window.addEventListener('keydown', handleKey);
})(ui, data);
