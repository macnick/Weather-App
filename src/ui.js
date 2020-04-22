const ui = (() => {
  const setBackground = (desc) => {
    document.documentElement.style.setProperty(
      '--bgnd',
      `url(/dist/img/${desc.toLowerCase()}.jpeg)`
    );
  };

  const renderData = (weather, unit = 'C') => {
    let { temp, feels_like, temp_min, temp_max } = weather.main;
    if (unit == 'F') {
      temp = (temp * 9) / 5 + 32;
      feels_like = (feels_like * 9) / 5 + 32;
      temp_min = (temp_min * 9) / 5 + 32;
      temp_max = (temp_max * 9) / 5 + 32;
    }
    let name = weather.name;
    let { main, description, icon } = weather.weather[0];
    setBackground(main);
    description = description.replace(/\b\w/g, (m) => m.toUpperCase());

    console.log(temp_min, temp_max, name, description, icon);

    document.getElementById(
      'location'
    ).innerText = `${name}, ${weather.sys.country}`;
    let d = (document.getElementById(
      'description'
    ).innerHTML = `${description}`);
    let image = document.createElement('img');
    image.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    // d.appendChild(image);
    document.getElementById('temp').innerText = `${~~temp} º${unit}`;
    document.getElementById(
      'feels'
    ).innerText = `Feels like: ${~~feels_like} º${unit}`;
    document.getElementById(
      'info'
    ).innerText = `Min: ${~~temp_min} º${unit} - Max: ${~~temp_max} º${unit}`;
    document.getElementById('units').innerText = `Change to º${
      unit == 'F' ? 'C' : 'F'
    }`;
  };

  return { renderData };
})();

export default ui;
