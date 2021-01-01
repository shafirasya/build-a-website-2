import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../App.css";

import City from "../components/City";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [cities, setCities] = useState([
    {
      name: "Abu Dhabi",
      currentTemp: "0",
      color: "bg-gray-100",
    },
    {
      name: "Canberra",
      currentTemp: "0",
      color: "bg-gray-200",
    },
    {
      name: "Cape Town",
      currentTemp: "0",
      color: "bg-gray-300",
    },
    {
      name: "Jakarta",
      currentTemp: "0",
      color: "bg-gray-100",
    },
    {
      name: "London",
      currentTemp: "0",
      color: "bg-gray-200",
    },
    {
      name: "Paris",
      currentTemp: "0",
      color: "bg-gray-300",
    },
    {
      name: "Tokyo",
      currentTemp: "0",
      color: "bg-gray-100",
    },
    {
      name: "Washington DC",
      currentTemp: "0",
      color: "bg-gray-200",
    },
  ]);

  useEffect(() => {
    updateAllWeatherData();
  }, []);

  // Fetch the weather data for 1 city
  async function fetchWeatherData(cityName) {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        return weather;
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.warn(error);
      });

    return res;
  }
  // update the list data
  async function updateAllWeatherData(params) {
    cities.forEach(function (citiesItems, index) {
      let weatherData = {};
      let newCities = [...cities];

      fetchWeatherData(citiesItems.name).then((res) => {
        weatherData = res;

        newCities[index].currentTemp = `${Math.round(weatherData.main.temp)}°C`;
        newCities[index].weatherType = weatherData.weather[0].main;
        setCities(newCities);
      });
    });
  }

  return (
    <div
      className="flex flex-col p-3"
      style={{
        backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c87d20d4-1cbe-42ae-b191-cc629a5b5a73/dboq3yo-39e2d1f9-502e-489f-94ba-3f12cee5ffa1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzg3ZDIwZDQtMWNiZS00MmFlLWIxOTEtY2M2MjlhNWI1YTczXC9kYm9xM3lvLTM5ZTJkMWY5LTUwMmUtNDg5Zi05NGJhLTNmMTJjZWU1ZmZhMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.6geYT7yXH1VcUtvra6vudrOOFmTtYn_Z7jwE6kfNQxQ")`,
      }}
    >
      <Header />
      {cities.map((item, index) => (
        <City cityName={item.name} temp={item.currentTemp} color={item.color} />
      ))}
      <Footer />
    </div>
  );
}

export default Home;
