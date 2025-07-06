import { WeatherHeader } from "../WeatherHeader/WeatherHeader";
import { WeatherBonus } from "../WeatherBonus/WeatherBonus";
import { WeatherInformations } from "../WeatherInformations/WeatherInformations";
import { WeatherLocation } from "../WeatherLocation/WeatherLocation";
import styles from "./style.module.css";

export function Weather({ weather, onInputChange }) {
  return (
    <div className={styles.weather}>
      <WeatherHeader onInputChange={onInputChange} />
      <WeatherLocation weather={weather} />
      <WeatherInformations weather={weather} />
      <WeatherBonus weather={weather} />
    </div>
  );
}
