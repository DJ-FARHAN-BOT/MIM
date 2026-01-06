const fs = require("fs");
module.exports = {
  config:{
  name: "@ʚ๛🅑︎ⓄᏇ▸᭄ـہہــہہــ⧸⧸ㇳ😎😈😗 ",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "Farhan", 
  description: "Fun",
  category: "no prefix",
  usages: "🙋‍♂️",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("@everyone")==0 || body.indexOf("oi")==0 || body.indexOf("@ʚ๛🅑︎ⓄᏇ▸᭄ـہہــہہــ⧸⧸ㇳ😎😈😗 ")==0 || body.indexOf("@ʚ๛🅑︎ⓄᏇ▸᭄ـہہــہہــ⧸⧸ㇳ😎😈😗 ")==0) {
    var msg = {
        body: "~ ডাকো কেনো গো, আমি আছি তো এখানে..!✋🥀",
        attachment: fs.createReadStream(__dirname + `/Nayan/dakoknogo.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
} 
