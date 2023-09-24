import { CITY } from "./constants";

interface Weather {
  timelines: {
    daily: {
      values: {
        temperatureAvg: number;
        windSpeedAvg: number;
        rainIntensityMax: number;
      };
    }[];
  };
}

const weatherMessage = (weather: Weather) => {
  const today = weather.timelines.daily?.[0]?.values;
  const tomorrow = weather.timelines.daily?.[1]?.values;
  const todayTemperature = today?.temperatureAvg;
  const tomorrowTemperature = tomorrow?.temperatureAvg;
  const windSpeed = today?.windSpeedAvg;
  const tomorrowWindSpeed = tomorrow?.windSpeedAvg;

  const willRainToday = today?.rainIntensityMax > 0;
  const willRainTomorrow = tomorrow?.rainIntensityMax > 0;

  const message = `Today in ${CITY} will be ${todayTemperature}°C, wind speed ${windSpeed}m/s. ${
    willRainToday ? "Take umbrella with you" : "No rain today"
  }. Tomorrow will be ${tomorrowTemperature}°C, wind speed ${tomorrowWindSpeed}m/s. ${
    willRainTomorrow ? "Take umbrella with you" : "No rain tomorrow"
  }.`;
  return message;
};

export default weatherMessage;
