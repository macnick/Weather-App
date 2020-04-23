
const ui = (() => {
  const setBackground = (desc) => {
    document.documentElement.style.setProperty(
      '--bgnd',
      `url(/dist/img/${desc.toLowerCase()}.jpeg)`,
    );
  };

  /* eslint-disable camelcase */
  /* eslint-disable prefer-const */
  const renderData = (weather, unit = 'C') => {
    let {
      temp, feels_like, temp_min, temp_max,
    } = weather.main;
    if (unit === 'F') {
      temp = (temp * 9) / 5 + 32;
      feels_like = (feels_like * 9) / 5 + 32;
      temp_min = (temp_min * 9) / 5 + 32;
      temp_max = (temp_max * 9) / 5 + 32;
    }
    const { name } = weather;
    let { main, description } = weather.weather[0];

    setBackground(main);

    description = description.replace(/\b\w/g, (m) => m.toUpperCase());

    document.getElementById(
      'location',
    ).innerText = `${name}, ${weather.sys.country}`;
    (document.getElementById(
      'description',
    ).innerHTML = `${description}`);

    document.getElementById('temp').innerText = `${Math.round(temp)} º${unit}`;
    document.getElementById(
      'feels',
    ).innerText = `Feels like: ${Math.round(feels_like)} º${unit}`;
    document.getElementById('info').innerText = `Min: ${Math.round(temp_min)} º${unit} - Max: ${Math.round(temp_max)} º${unit}`;
    document.getElementById('units').innerText = `Change to º${
      unit === 'F' ? 'C' : 'F'}`;
  };

  return { renderData };
})();

export default ui;
