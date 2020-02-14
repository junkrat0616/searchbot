const Discord = require("discord.js");
module.exports = {
  name: "namuwiki",
  aliases: ["namu"],
  description: "Search Namuwiki",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "https://namu.wiki/Search?q=" + message.content.split(sublink)[1];
    const link2 = link.replace(" ", "%20");
    const embed = new Discord.RichEmbed()
      .setColor("0x1fb800")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://katex.org/img/namuwiki_logo.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
