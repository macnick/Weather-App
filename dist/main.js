/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const ui = (() => {\n  const renderData = (weather, unit = 'C') => {\n    const { temp, feels_like, temp_min, temp_max } = weather.main;\n    let name = weather.name;\n    let { description, icon } = weather.weather[0];\n    description = description.replace(/\\b\\w/g, (m) => m.toUpperCase());\n\n    console.log(temp_min, temp_max, name, description, icon);\n\n    document.getElementById(\n      'location'\n    ).innerText = `${name}, ${weather.sys.country}`;\n    let d = (document.getElementById(\n      'description'\n    ).innerHTML = `${description}`);\n    let image = document.createElement('img');\n    image.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;\n    // d.appendChild(image);\n    document.getElementById('temp').innerText = `${~~temp} º${unit}`;\n    document.getElementById(\n      'feels'\n    ).innerText = `Feels like: ${~~feels_like} º${unit}`;\n    document.getElementById(\n      'info'\n    ).innerText = `Min: ${~~temp_min} º${unit} - Max: ${~~temp_max} º${unit}`;\n  };\n\n  return { renderData };\n})();\n\nconst data = (() => {\n  const getWeather = async (city, unit) => {\n    let KEY = '4e3a46238240176b8e18b2672de5b78b';\n    const weather = await fetch(\n      ` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${KEY}`,\n      { mode: 'cors' }\n    );\n    const weatherData = await weather.json();\n    // console.log(weatherData);\n    return weatherData;\n  };\n\n  return {\n    getWeather,\n  };\n})();\n\nconst control = ((ui, data) => {\n  const myWeather = async (city = 'Athens', unit = 'metric') => {\n    let response = await data.getWeather(city, unit);\n    ui.renderData(response);\n    console.log('in control', response);\n    return response;\n  };\n\n  const handleClick = (e) => {\n    if (input.value) myWeather(input.value);\n    console.log(e, input.value);\n  };\n\n  const handleKey = (e) => {\n    if (e.key == 'Enter' && input.value) myWeather(input.value);\n  };\n\n  myWeather();\n\n  let input = document.getElementById('search');\n  document.getElementById('submit').addEventListener('click', handleClick);\n  window.addEventListener('keydown', handleKey);\n})(ui, data);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });