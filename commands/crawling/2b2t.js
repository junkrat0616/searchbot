const request = require("request");
const Discord = require("discord.js");

module.exports = {
  name: "2b2t",
  aliases: ["2b2t_info"],
  run: async (client, message, args) => {
    var url = "https://rebane2001.com/queuepeek/data.json";

    const embed = new Discord.RichEmbed()
      .setTitle("2b2t")
      .setColor("29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp();

    request(url, function(error, ddd, html) {
      if (!error) {
        embed.setDescription(
          `**Waiting**\n${
            JSON.parse(html, null, 1).queuepos
          }\n\n**Waiting Time**\n${JSON.parse(html, null, 1)
            .queueest.replace(/h/gi, "h")
            .replace(/m/gi, "m")}`
        );
        message.channel.send(embed);
      }
    });
  }
};
