# Researcher Assistant
A repo of building Perplexity AI 'pplx-7b-online' by using LINE Messaging API and Cloud Functions for Firebase. The bot will help you search for latest researches in your interest area.

## Prerequisites
* [Node.js v18](https://nodejs.org) or higher
* [Create a channel on the LINE Developers console](https://developers.line.biz/en/docs/messaging-api/getting-started/)
* Create a Firebase project using the [Firebase Console](https://console.firebase.google.com) and select <b>Blaze plan</b>

## Cloud Functions for Firebase
* Copy credentials and set them in Environment variable (.env)
```
Create your .env file in functions folder and add
CHANNEL_ACCESS_TOKEN=CHANNEL-ACCESS-TOKEN-OF-LINE-MESSAGING-API
PERPLEXITY_API_KEY=API-KEY-FROM-PERPLEXITY
```

## Documentation
* [LINE Messaging API](https://developers.line.biz/en/docs/messaging-api/overview)
* [Cloud Functions for Firebase](https://firebase.google.com/docs/functions/get-started)
* [Perplexity API](https://docs.perplexity.ai/docs/getting-started)
