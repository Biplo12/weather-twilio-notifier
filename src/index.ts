import dotenv from "dotenv";
import twillio from "twilio";
import axios from "axios";
import {
  ACCOUNT_SID,
  AUTH_TOKEN,
  TWILLIO_PHONE_NUMBER,
  WEATHER_BASE_URL,
  WEATHER_API_KEY,
  CITY,
  PHONE_NUMBER,
} from "../utils/constants";
import cronJob from "cron";
import weatherMessage from "../utils/weatherMessage";

dotenv.config();

const client = twillio(ACCOUNT_SID, AUTH_TOKEN);

const getWeather = async () => {
  try {
    const { data } = await axios.get(
      `${WEATHER_BASE_URL}location=${CITY}&apikey=${WEATHER_API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const sendSMS = async (to: string, body: string) => {
  try {
    const message = await client.messages.create({
      body,
      from: TWILLIO_PHONE_NUMBER,
      to,
    });
    return message;
  } catch (error) {
    console.log(error);
  }
};

const dailyWeatherStatus = async () => {
  const weather = await getWeather();
  const message = weatherMessage(weather);
  await sendSMS(PHONE_NUMBER as string, message);
  console.log("Message sent!");
};

const job = new cronJob.CronJob("0 8 * * *", dailyWeatherStatus, null, true);

console.log("Starting cron job...");
job.start();
