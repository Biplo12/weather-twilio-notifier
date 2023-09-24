const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILLIO_PHONE_NUMBER = process.env.TWILLIO_PHONE_NUMBER;
const PHONE_NUMBER = process.env.PHONE_NUMBER;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_BASE_URL = "https://api.tomorrow.io/v4/weather/forecast?";

const CITY = "Bytom";

export {
  ACCOUNT_SID,
  AUTH_TOKEN,
  TWILLIO_PHONE_NUMBER,
  PHONE_NUMBER,
  WEATHER_BASE_URL,
  CITY,
  WEATHER_API_KEY,
};
