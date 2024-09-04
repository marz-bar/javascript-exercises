const convertToCelsius = function(temperature) {
  const celsiusTemp = 5/9;
  let actualTemp = celsiusTemp * (temperature - 32);
  return Math.round(actualTemp * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  const fahrenheitTemp = 9/5;
  let actualTemp = fahrenheitTemp * temperature + 32
  return Math.round(actualTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
