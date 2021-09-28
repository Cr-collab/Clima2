export function translateFahrenheit(celsius, f) {
  return f ? `${Math.round(celsius * 1.8 + 32)}°f` : `${celsius}°c`
}
