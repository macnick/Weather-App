(()=>{"use strict";((e,t)=>{let n,a="C";const r=e=>"C"===a?"metric":"imperial",i=document.getElementById("search"),d=async(r="Athens",i="metric")=>{try{const d=await t.getWeather(r,i);return e.renderData(d,a),n=await d,d}catch(e){return"Can not find this city"}},o=e=>{"units"===e.target.id?(a="C"===a?"F":"C",d(n.name,r())):"search"===e.target.id?i.value="":i.value&&d(i.value,r())};d(),e.title("Weather App","WOW! a weather app!"),i.addEventListener("click",o),document.getElementById("submit").addEventListener("click",o),document.getElementById("units").addEventListener("click",o),window.addEventListener("keydown",(e=>{"Enter"===e.key&&i.value&&d(i.value,r())}))})({renderData:(e,t="C")=>{let{temp:n,feels_like:a,temp_min:r,temp_max:i}=e.main;const{name:d}=e;let{main:o,description:c,icon:m}=e.weather[0];var s;s=o,document.documentElement.style.setProperty("--bgnd",`url(/dist/img/${s.toLowerCase()}.jpeg)`),c=c.replace(/\b\w/g,(e=>e.toUpperCase())),document.querySelector("img").src=`https://openweathermap.org/img/wn/${m}@2x.png`,document.getElementById("location").innerText=`${d}, ${e.sys.country}`,document.getElementById("description").innerHTML=`${c}`,document.getElementById("temp").innerText=`${Math.round(n)} º${t}`,document.getElementById("feels").innerText=`Feels like: ${Math.round(a)} º${t}`,document.getElementById("info").innerText=`Min: ${Math.round(r)} º${t} - Max: ${Math.round(i)} º${t}`,document.getElementById("units").innerText="Change to º"+("F"===t?"C":"F")},title:(e,t)=>{window.onfocus=()=>document.title=e,window.onblur=()=>document.title=t}},{getWeather:async(e,t)=>{const n=await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${e}&units=${t}&APPID=4e3a46238240176b8e18b2672de5b78b`,{mode:"cors"});return await n.json()}})})();