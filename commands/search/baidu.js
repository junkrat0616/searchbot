const Discord = require("discord.js");
module.exports = {
  name: "baidu",
  aliases: ["bd", "baidusearch"],
  description: "Search Baidu",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "https://www.baidu.com/s?wd=" + message.content.split(sublink)[1];
    const link2 = link.replace(" ", "%20");
    const embed = new Discord.RichEmbed()
      .setColor("0x2529d8")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "http://pluspng.com/img-png/baidu-logo-png-baidu-icon-png-50-px-1600.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
