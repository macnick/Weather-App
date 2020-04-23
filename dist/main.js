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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = (() => {\n  const getWeather = async (city, unit) => {\n    const KEY = \"4e3a46238240176b8e18b2672de5b78b\";\n    const weather = await fetch(\n      ` https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${KEY}`,\n      { mode: 'cors' },\n    );\n    const weatherData = await weather.json();\n    return weatherData;\n  };\n\n  return {\n    getWeather,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\n\n/* eslint-disable no-unused-vars */\nconst control = ((ui, data) => {\n  let weatherData;\n  let units = 'C';\n  const input = document.getElementById('search');\n\n  const myWeather = async (city = 'Athens', unit = 'metric') => {\n    try {\n      const response = await data.getWeather(city, unit);\n      ui.renderData(response);\n      weatherData = await response;\n      return response;\n    } catch (e) {\n      alert('Can not find this city', e);\n    }\n  };\n\n  const handleClick = (e) => {\n    if (e.target.id === 'units') {\n      units = units === 'C' ? 'F' : 'C';\n      ui.renderData(weatherData, units);\n    } else if (e.target.id === 'search') {\n      input.value = '';\n    } else if (input.value) {\n      units = 'C';\n      myWeather(input.value);\n    }\n  };\n\n  const handleKey = (e) => {\n    if (e.key === 'Enter' && input.value) myWeather(input.value);\n  };\n\n  let myass = myWeather();\n  // let obj = myass.then(console.log);\n\n\n  input.addEventListener('click', handleClick);\n  document.getElementById('submit').addEventListener('click', handleClick);\n  document.getElementById('units').addEventListener('click', handleClick);\n\n  window.addEventListener('keydown', handleKey);\n\n})(_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _data__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst ui = (() => {\n  const setBackground = (desc) => {\n    document.documentElement.style.setProperty(\n      '--bgnd',\n      `url(/dist/img/${desc.toLowerCase()}.jpeg)`,\n    );\n  };\n\n  /* eslint-disable camelcase */\n  /* eslint-disable prefer-const */\n  const renderData = (weather, unit = 'C') => {\n    let {\n      temp, feels_like, temp_min, temp_max,\n    } = weather.main;\n    if (unit === 'F') {\n      temp = (temp * 9) / 5 + 32;\n      feels_like = (feels_like * 9) / 5 + 32;\n      temp_min = (temp_min * 9) / 5 + 32;\n      temp_max = (temp_max * 9) / 5 + 32;\n    }\n    const { name } = weather;\n    let { main, description, icon } = weather.weather[0];\n\n    setBackground(main);\n\n    description = description.replace(/\\b\\w/g, (m) => m.toUpperCase());\n    const img = document.querySelector('img');\n    img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`\n    document.getElementById(\n      'location',\n    ).innerText = `${name}, ${weather.sys.country}`;\n    (document.getElementById(\n      'description',\n    ).innerHTML = `${description}`);\n\n    document.getElementById('temp').innerText = `${Math.round(temp)} º${unit}`;\n    document.getElementById(\n      'feels',\n    ).innerText = `Feels like: ${Math.round(feels_like)} º${unit}`;\n    document.getElementById('info').innerText = `Min: ${Math.round(temp_min)} º${unit} - Max: ${Math.round(temp_max)} º${unit}`;\n    document.getElementById('units').innerText = `Change to º${\n      unit === 'F' ? 'C' : 'F'}`;\n  };\n\n  return { renderData };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ui);\n\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ });