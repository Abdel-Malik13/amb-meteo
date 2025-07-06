import styles from "./style.module.css";

export function WeatherBonus({ weather }) {
  return (
    <div className={styles.weatherBonus}>
      <p>
        <i className="fa-solid fa-droplet"></i> Humidity{" "}
        {weather.main?.humidity ?? ""}%
      </p>
      <p>
        <i className="fa-solid fa-wind"></i> Wind {weather.wind?.speed ?? ""}{" "}
        km/h
      </p>
      <p>
        <i className="fa-solid fa-temperature-three-quarters"></i>
        {weather.main?.pressure ?? ""} hPa
      </p>
    </div>
  );
}
