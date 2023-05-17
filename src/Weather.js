import React, { useState } from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function Weather() {
  const [zipCode, setZipCode] = useState("");
  const [lattitude, setLat] = useState(0);
  const [longtitude, setLon] = useState(0);
  const [city, setCity] = useState("");
  const [high24, setHigh24] = useState(0);
  const [low24, setLow24] = useState(0);
  const [high30, setHigh30] = useState(0);
  const [low30, setLow30] = useState(0);
  const [high36, setHigh36] = useState(0);
  const [low36, setLow36] = useState(0);
  const [high42, setHigh42] = useState(0);
  const [low42, setLow42] = useState(0);
  const [temp, setTemp] = useState(0);
  const [feels, setFeels] = useState(0);
  const [icon, setIcon] = useState("");
  const [day1, setDay1] = useState("");
  const [day2, setDay2] = useState("");
  const [day3, setDay3] = useState("");
  const [day4, setDay4] = useState("");
  const [day5, setDay5] = useState("");
  const [day6, setDay6] = useState("");

  function getInfo(event) {
    event.preventDefault();
    let apiKey = REACT_APP_WEATHER_API_KEY;
    let apiurl = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipCode}&appid=${apiKey}`;
    axios.get(apiurl).then(setBasic);
  }

  function setBasic(response) {
    console.log(response);
    setLat(response.data.lat);
    setLon(response.data.lon);
    setCity(response.data.name);
    console.log("Lat: " + lattitude);
    console.log("Lon: " + longtitude);
  }

  function getWeather(event) {
    event.preventDefault();
    let apiKey = REACT_APP_WEATHER_API_KEY;
    let apiurl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longtitude}&exclude=minutely,alerts&units=metric&appid=${apiKey}`;
    axios.get(apiurl2).then(setAllW);
  }

  function setAllW(response) {
    console.log(response);
    setTemp(response.data.current.temp);
    setFeels(response.data.current.feels_like);
    setIcon(response.data.current.weather[0].icon);
    setHigh24(response.data.hourly[24].temp);
    setLow24(response.data.hourly[24].feels_like);
    setHigh30(response.data.hourly[30].temp);
    setLow30(response.data.hourly[30].feels_like);
    setHigh36(response.data.hourly[36].temp);
    setLow36(response.data.hourly[36].feels_like);
    setHigh42(response.data.hourly[42].temp);
    setLow42(response.data.hourly[42].feels_like);
    setDay1(response.data.daily[0].weather[0].description);
    setDay2(response.data.daily[1].weather[0].description);
    setDay3(response.data.daily[2].weather[0].description);
    setDay4(response.data.daily[3].weather[0].description);
    setDay5(response.data.daily[4].weather[0].description);
    setDay6(response.data.daily[5].weather[0].description);
  }

  function displayWeather(e) {
    getInfo(e);
    getWeather(e);
  }

  return (
    <div>
      <form>
        <label>
          {" "}
          Enter your zipcode (US zipcode Only):
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <button onClick={displayWeather}>enter</button>
        </label>
      </form>
      <p>
        Lattitude: {lattitude}, Longtitude: {longtitude}
      </p>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Weather forcast (In C): "
          color="primary"
          variant="outlined"
        />
      </Stack>
      <ul>
        <li>Current weather in {city}:</li>
        <li>
          Temperature: {temp}, Feels like: {feels}
        </li>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={"Icon"}
        ></img>
      </ul>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Hourly forcast for tomorrow"
          color="primary"
          variant="outlined"
        />
      </Stack>
      <ul>
        <li>
          +24 hours: temp ({high24}), feels like ({low24})
        </li>
        <li>
          +30 hours: temp ({high30}), feels like ({low30})
        </li>
        <li>
          +36 hours: temp ({high36}), feels like ({low36})
        </li>
        <li>
          +42 hours: temp ({high42}), feels like ({low42})
        </li>
      </ul>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Daily forcast for upcoming week"
          color="primary"
          variant="outlined"
        />
      </Stack>
      <ul>
        <li>Day +1: {day1}</li>
        <li>Day +2: {day2}</li>
        <li>Day +3: {day3}</li>
        <li>Day +4: {day4}</li>
        <li>Day +5: {day5}</li>
        <li>Day +6: {day6}</li>
      </ul>
    </div>
  );
}

export default Weather;
