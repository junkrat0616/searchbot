const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
module.exports = {
  name: "servers",
  description: "Servers that Search is in",
  run: async (client, message, args) => {
    var str = " ";
    client.guilds.forEach(guild => {
      str += `> ${guild.name} - ${guild.memberCount}\n`;
    });
    const embed = new RichEmbed()
      .setColor("29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp()
      .setTitle(`Servers that Search is in`)
      .setDescription(str);
    message.channel.send(embed);
  }
};
