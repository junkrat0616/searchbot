const Discord = require("discord.js");
module.exports = {
  name: "daum",
  aliases: ["du", "aum", "dau", "dauming"],
  description: "Search Daum",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "https://search.daum.net/search?q=" + message.content.split(sublink)[1];
    const link2 = link.replace(" ", "%20");
    const embed = new Discord.RichEmbed()
      .setColor("0x1abeff")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/7d/15/07/7d15073f-5070-3321-51c4-2e20203951ac/source/512x512bb.jpg"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
