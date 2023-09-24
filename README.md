# Weather Notification Script Documentation

## Introduction

The Weather Notification Script is a Node.js application written in TypeScript that fetches today's and tomorrow's weather information using the Tomorrow.io API and sends it as an SMS message using the Twilio API. The script is scheduled to run every day at 8:00 AM using the `cron` library. It provides weather details such as temperature, wind speed, and whether it will rain for a specified city.

## Prerequisites

Before you can use the Weather Notification Script, make sure you have the following prerequisites in place:

1. Node.js installed on your computer.
2. A Tomorrow.io API key. You can obtain one by signing up at [Tomorrow.io](https://www.tomorrow.io/weather-api/).
3. Twilio API credentials:
   - Twilio Account SID
   - Twilio Auth Token
   - Twilio Phone Number
   - Recipient Phone Number (where you want to send the weather updates)

## Getting Started

Follow these steps to set up and use the Weather Notification Script:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/your-username/weather-notification.git
   ```

2. Change into the project directory:

   ```bash
   cd weather-notification
   ```

3. Install the project dependencies:

   ```bash
   bun install
   ```

4. Create a `.env` file in the project root directory based on the provided `env.example`. Fill in your Tomorrow.io API key, Twilio credentials, and phone numbers:

   ```env
   TOMORROW_IO_API_KEY=your_tomorrow_io_api_key
   ACCOUNT_SID=your_twilio_account_sid
   AUTH_TOKEN=your_twilio_auth_token
   TWILIO_PHONE_NUMBER=your_twilio_phone_number
   PHONE_NUMBER=recipient_phone_number
   CITY=your_city
   ```

5. Start the script by running the following command:

   ```bash
   bun start
   ```

## Scheduling Daily Weather Updates

The script is configured to send weather updates every day at 8:00 AM using the `cron` library. You can adjust the scheduling by modifying the `CronJob` variable in the `index.ts` file:

```typescript
// index.ts
const job = new cronJob.CronJob("0 8 * * *", dailyWeatherStatus, null, true);
```

To change the schedule, refer to the `cron` syntax for scheduling, which is in the format `seconds minutes hours dayOfMonth month dayOfWeek`. For example, `"0 8 * * *"` means 8:00 AM every day.

## Customization

You can customize the message format or the weather information fetched from Tomorrow.io by modifying the `dailyWeatherStatus` function in the `index.ts` file.

## Troubleshooting

If you encounter any issues while setting up or using the Weather Notification Script, please refer to the GitHub repository's issue tracker for help or submit your own issue.

## Conclusion

With the Weather Notification Script, you can receive daily weather updates via SMS for your specified city. This script can be a handy tool to help you plan your day and stay informed about the weather conditions. Enjoy your weather updates!
