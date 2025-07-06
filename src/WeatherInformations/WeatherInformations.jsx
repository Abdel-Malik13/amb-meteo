import styles from "./style.module.css";

export function WeatherInformations({ weather }) {
  return (
    <div className={styles.weatherInformations}>
      <div className={styles.iconWeather}>
        <img
          className="icon"
          src={`https://openweathermap.org/img/wn/${
            weather.weather?.[0].icon ?? ""
          }@4x.png`}
          alt=""
        />
      </div>
      <div className={styles.weatherData}>
        <p className={styles.weatherTemperature}>
          {Math.round(weather.main?.temp) ?? 0}°C
        </p>
        <p className={styles.weatherDescription}>
          {weather.weather?.[0]?.description ?? ""}
        </p>
        <p className={styles.weatherFeelsLike}>
          Feels like {Math.round(weather.main?.feels_like) ?? 0}°C
        </p>
      </div>
    </div>
  );
}
