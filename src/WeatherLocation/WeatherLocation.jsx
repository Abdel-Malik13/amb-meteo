import styles from "./style.module.css";

export function WeatherLocation({ weather }) {
  const date = new Date();
  const dateFormat = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  const dateWithUppercase =
    dateFormat.charAt(0).toUpperCase() + dateFormat.slice(1);

  return (
    <div className={styles.weatherLocation}>
      <h2>
        {weather.name}, {weather.sys?.country ?? ""}
      </h2>
      <p>{dateWithUppercase}</p>
    </div>
  );
}
