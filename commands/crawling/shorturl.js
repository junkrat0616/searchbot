const shorten = require("isgd"); // npm i isgd

module.exports = {
  name: "shorturl",
  description: "shorten a url",
  run: async (client, message, args, tools) => {
    if (!args[0]) {
      return message
        .reply("Please enter a url you wants to shorten")
        .then(m => m.delete(5000));
    }

    if (!args[1]) {
      shorten.shorten(args[0], function(res) {
        message.channel.send(`**${res}**`);
      });
    } else {
      shorten.custom(args[0], args[1], function(res) {
        message.channel.send(`**<${res}>**`);
      });
    }
  }
};
