import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import WeatherImage from "../components/WeatherImage";
import "../App.css";

// TODO
// - implement API
// - add props to details screen
// - style the details screen

function Details() {
  const history = useHistory();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    console.log(process.env.REACT_APP_WEATHER_KEY);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        setWeatherData(weather);
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.log(error);
      });
  }, [city]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const cityName = urlParams.get("name");
    if (cityName) {
      setCity(cityName);
    }
  }, [history]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    let cloudiness = "";
    let currentTemp = "";
    let highTemp = "";
    let humidity = "";
    let lowTemp = "";
    let weatherType = "";
    let windSpeed = "";

    if (weatherData) {
      cloudiness = `${weatherData.clouds.all}%`;
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
      highTemp = `${Math.round(weatherData.main.temp_max)}°C`;
      humidity = `${weatherData.main.humidity}%`;
      lowTemp = `${Math.round(weatherData.main.temp_min)}°C`;
      weatherType = `${weatherData.weather[0].description}`;
      windSpeed = `${weatherData.wind.speed} mph`;
    }

    return {
      cloudiness,
      currentTemp,
      highTemp,
      humidity,
      lowTemp,
      weatherType,
      windSpeed,
    };
  }, [weatherData]);

  return (
    // Container
    <div
      className="flex flex-col items-center h-screen"
      style={{
        backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c87d20d4-1cbe-42ae-b191-cc629a5b5a73/dboq3yo-39e2d1f9-502e-489f-94ba-3f12cee5ffa1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzg3ZDIwZDQtMWNiZS00MmFlLWIxOTEtY2M2MjlhNWI1YTczXC9kYm9xM3lvLTM5ZTJkMWY5LTUwMmUtNDg5Zi05NGJhLTNmMTJjZWU1ZmZhMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.6geYT7yXH1VcUtvra6vudrOOFmTtYn_Z7jwE6kfNQxQ")`,
      }}
    >
      <div className="p-8 text-4xl font-bold">Weather in {city}</div>

      <div className="flex flex-col p-8 m-4 border-2 rounded-full border-black items-center animate-bounce">
        <WeatherImage
          weatherType={weatherType}
          className="text-3xl p-4 leading-normal"
        />
        <div>{weatherType}</div>
        <div>Current Temperature : {currentTemp}</div>
      </div>

      <div>High Temperature : {highTemp}</div>
      <div>Cloudiness : {cloudiness}</div>
      <div>Low Temperature : {lowTemp}</div>
      <div>Humidity : {humidity}</div>
      <div>Wind Speed : {windSpeed}</div>
    </div>
  );
}

export default Details;
