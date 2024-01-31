const {onRequest} = require("firebase-functions/v2/https");
const line = require("./utils/line");
const perplexity = require("./utils/perplexity");

exports.webhook = onRequest(async (req, res) => {
  if (req.method === "POST") {
    const events = req.body.events;
    for (const event of events) {
      switch (event.type) {
        case "message":

          if (event.message.type === "text") {
            const msg = await perplexity.research(event.message.text);
            await line.reply(event.replyToken, [{ type: "text", text: msg }]);
            return res.end();
          }
          break;
      }
    }
  }
  
  return res.send(req.method);
});