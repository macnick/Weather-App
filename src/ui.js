const ui = (() => {
  const renderData = (weather, unit = 'C') => {
    const { temp, feels_like, temp_min, temp_max } = weather.main;
    let name = weather.name;
    let { description, icon } = weather.weather[0];
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
  };

  return { renderData };
})();

export default ui;
