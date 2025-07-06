import styles from "./style.module.css";

export function WeatherHeader({ onInputChange }) {
  const handleChange = (e) => {
    console.log(e);

    onInputChange(e.target.value);
  };

  return (
    <div className={styles.weatherHeader}>
      <h1>Weathery</h1>
      <input
        className={styles.inputSearch}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}
