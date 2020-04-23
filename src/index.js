import ui from './ui';
import data from './data';

/* eslint-disable no-unused-vars */
const control = ((ui, data) => {
  let weatherData;
  let units = 'C';
  const input = document.getElementById('search');

  const myWeather = async (city = 'Athens', unit = 'metric') => {
    const response = await data.getWeather(city, unit);
    ui.renderData(response);
    weatherData = await response;
    return response;
  };

  const handleClick = (e) => {
    if (e.target.id === 'units') {
      units = units === 'C' ? 'F' : 'C';
      ui.renderData(weatherData, units);
    } else if (e.target.id === 'search') {
      input.value = '';
    } else if (input.value) {
      units = 'C';
      myWeather(input.value);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && input.value) myWeather(input.value);
  };

  myWeather();

  input.addEventListener('click', handleClick);
  document.getElementById('submit').addEventListener('click', handleClick);
  document.getElementById('units').addEventListener('click', handleClick);

  window.addEventListener('keydown', handleKey);
})(ui, data);
