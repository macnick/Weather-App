const data = (() => {
  const getWeather = async (city, unit) => {
    const KEY = process.env.API_KEY;
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
