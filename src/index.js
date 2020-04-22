import ui from './ui';
import data from './data';

const control = ((ui, data) => {
  const myWeather = async (city = 'Athens', unit = 'metric') => {
    let response = await data.getWeather(city, unit);
    ui.renderData(response);
    console.log('in control', response);
    return response;
  };

  const handleClick = (e) => {
    if (input.value) myWeather(input.value, unit);
    if (e.target.id == 'units') {
      data.changeUnits();
      ui.updateUnits();
    }
    console.log(e.target.id, input.value, response);
  };

  const handleKey = (e) => {
    if (e.key == 'Enter' && input.value) myWeather(input.value);
  };

  myWeather();

  let input = document.getElementById('search');
  document.getElementById('submit').addEventListener('click', handleClick);
  document.getElementById('units').addEventListener('click', handleClick);
  window.addEventListener('keydown', handleKey);
})(ui, data);
