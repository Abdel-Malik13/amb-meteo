import { useEffect, useState } from "react";
import "./App.css";
import { Weather } from "./Weather/Weather";
import clearImg from "./assets/images/Clear.png";
import rainImg from "./assets/images/Rain.png";
import cloudsImg from "./assets/images/Clouds.png";
import snowImg from "./assets/images/Snow.png";
import defaultImg from "./assets/images/Default.png";
import { HourlyForecast } from "./HourlyForecast/HourlyForecast";

export function App() {
  const [weather, setWeather] = useState({});
  const [prevision, setPrevision] = useState({});
  const [city, setCity] = useState("");
  const backgrounds = {
    Clear: clearImg,
    Rain: rainImg,
    Clouds: cloudsImg,
    Snow: snowImg,
  };
  const weatherMain = weather.weather?.[0]?.main;
  const backgroundUrl = backgrounds[weatherMain] || defaultImg;

  const handleInputChange = (value) => {
    setCity(value);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            city || "Marseille"
          }&appid=594f20636190372a5d72a67480aa6e45&units=metric&lang=fr`
        );
        const data = await response.json();
        setWeather(data);
        // console.log(data);
      } catch (error) {
        console.error("Erreur lors du chargement de la météo", error);
      }
    };

    fetchWeather();
  }, [city]);

  useEffect(() => {
    const fetchPrevision = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${
            city || "Marseille"
          },fr&units=metric&lang=fr&appid=594f20636190372a5d72a67480aa6e45`
        );
        const data = await response.json();
        setPrevision(data);
        // console.log(data);
      } catch (error) {
        console.error("Erreur lors du chargement des prévisions", error);
      }
    };

    fetchPrevision();
  }, [city]);

  return (
    <div
      className="bg-container"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <Weather weather={weather} onInputChange={handleInputChange} />
      <HourlyForecast prevision={prevision} />
      {/* <div className="five-day-forecast">
        <ul>
          <li></li>
        </ul>
      </div> */}
    </div>
  );
}
