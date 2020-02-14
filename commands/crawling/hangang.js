const cheerio = require("cheerio");
const request = require("request");
const Discord = require("discord.js");
module.exports = {
  name: "hangang",
  aliases: ["hangangtemperature"],
  description: "Search an lyric",
  run: async (client, message, args, tools) => {
    request.get({ url: "https://www.wpws.kr/hangang/" }, function(
      err,
      response,
      body
    ) {
      var $ = cheerio.load(body);
      var value = body
        .split('<p id="temp"><i class="xi-tint">')[1]
        .split("</p>")[0]
        .split("</i>")[1]
        .split("도")[0];
      const embed = new Discord.RichEmbed()
        .setTitle("HanGang Temperature")
        .setDescription(`HanGang\'s Temperature is ${value}℃`)
        .setColor("29ffed")
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp();
      message.channel.send(embed);
    });
  }
};
