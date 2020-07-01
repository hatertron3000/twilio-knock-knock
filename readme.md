# Knock Knock
This is a just fun knock knock joke with a haiku bonus.

## Installation

Install [twilio-cli](https://www.twilio.com/docs/twilio-cli/quickstart) then run `twilio login` to configure it.

```
git clone https://github.com/hatertron3000/knock-knock
cd knock-knock
npm install
npm run dev
```

In another shell, run
```
twilio phone-numbers:update "<YOUR TWILIO PHONE NUMBER>" --sms-url="http://localhost:3000/sms"
```

Replace `<YOUR TWILIO PHONE NUMBER>` with your Twilio phone number. Once the express server and ngrok are running, text the word "Joke" to your Twilio phone number.