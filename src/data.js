const data = (() => {
  const getWeather = async (city, unit) => {
    let KEY = '4e3a46238240176b8e18b2672de5b78b';
    const weather = await fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${KEY}`,
      { mode: 'cors' }
    );
    const weatherData = await weather.json();
    return weatherData;
  };

  return {
    getWeather,
  };
})();

export default data;
