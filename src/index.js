const ui = (() => {
  const renderData = (weather, unit = 'C') => {
    const { temp, feels_like, temp_min, temp_max } = weather.main;
    let name = weather.name;
    const { description, icon } = weather.weather[0];
    console.log(temp_min, temp_max, name, description, icon);
    document.getElementById(
      'location'
    ).innerText = `${name}, ${weather.sys.country}`;
    document.getElementById('description').innerText = `${description}`;
    document.getElementById('temp').innerText = `${~~temp} º${unit}`;
    document.getElementById('feels').innerText = `Feels like: ${feels_like}`;
  };

  return { renderData };
})();

const data = (() => {
  const getWeather = async (city = 'Athens', unit = 'metric') => {
    let KEY = '4e3a46238240176b8e18b2672de5b78b';
    const weather = await fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${KEY}`,
      { mode: 'cors' }
    );
    const weatherData = await weather.json();
    // console.log(weatherData);
    return weatherData;
  };

  return {
    getWeather,
  };
})();

const control = ((ui, data) => {
  const myWeather = async (city) => {
    let response = await data.getWeather();
    ui.renderData(response);
    console.log('in control', response);
    return response;
  };
  myWeather();
})(ui, data);
