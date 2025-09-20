// celsius to fahrenheit converting from metric to imperial
export const CelsiusToFahrenheit = (celsiusNumber: number) => {
  return celsiusNumber * (9 / 5) + 32;
};

// fahrenheit to celsius converting from imperial to metric
export const FahrenheitToCelsius = (fahrenheitNumber: number) => {
  return ((fahrenheitNumber - 32) * 5) / 9;
};
