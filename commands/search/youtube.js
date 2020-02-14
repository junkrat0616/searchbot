const Discord = require("discord.js");
const search = require("yt-search");
module.exports = {
  name: "youtube",
  aliases: ["ytube", "tube", "you", "outube"],
  description: "Search Yahoo",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "https://www.youtube.com/results?search_query=" +
      message.content.split(sublink)[1];
    const link2 = link.replace(" ", "%20");
    const embed = new Discord.RichEmbed()
      .setColor("0x262117")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
