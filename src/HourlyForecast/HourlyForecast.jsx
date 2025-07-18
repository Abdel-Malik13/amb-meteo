import styles from "./style.module.css";

export function HourlyForecast({ prevision }) {
  if (!prevision.list) return null;
  console.log(prevision);

  return (
    <div className={styles.hourlyForecast}>
      <h2>Hourly Forecast</h2>
      <ul className={styles.hourly}>
        {prevision.list.slice(0, 5).map((prev, index) => (
          <li key={index} className={styles.hourlyItem}>
            <span>{new Date(prev.dt_txt).getHours()}h</span>{" "}
            <span>
              <img
                className={styles.icon}
                src={`https://openweathermap.org/img/wn/${
                  prev.weather[0].icon ?? ""
                }.png`}
                alt=""
              />
            </span>
            <span>{Math.round(prev.main.temp)}°C</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
