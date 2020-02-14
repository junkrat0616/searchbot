const request = require("request");
const Discord = require("discord.js");

module.exports = {
  name: "mincraftserver",
  aliases: ["checkmcserver"],
  run: async (client, message, args) => {
    var url = args[0];

    const embed = new Discord.RichEmbed()
      .setDescription(`${url}'s Status`)
      .setColor("29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp();
    request("https://mcsrvstat.us/server/" + url.toString(), function(
      err,
      res,
      body
    ) {
      try {
        var status = body
          .split("<h2>")[1]
          .split("&")[0]
          .toString();
        if (status === "Could not get the server status") {
          embed.setTitle(`${url} is currently Offline`);
          message.channel.send(embed);
        }
      } catch {
        embed.setTitle(`${url} is currently Online`);
        message.channel.send(embed);
      }
    });
  }
};
