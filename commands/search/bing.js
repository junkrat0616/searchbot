const Discord = require("discord.js");
module.exports = {
  name: "bing",
  aliases: ["bg", "bingo"],
  description: "Search Bing",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "https://www.bing.com/search?q=" + message.content.split(sublink)[1];
    const link2 = link.replace(" ", "%20");
    const embed = new Discord.RichEmbed()
      .setColor("0x0c8484")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Bing_favicon.svg/768px-Bing_favicon.svg.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
