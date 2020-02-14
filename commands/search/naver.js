const Discord = require("discord.js");
module.exports = {
  name: "naver",
  aliases: ["nv", "aver", "nave", "naving"],
  description: "Search Naver",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "https://search.naver.com/search.naver?query=" +
      message.content.split(sublink)[1];
    const link2 = link.replace(" ", "%20");
    const embed = new Discord.RichEmbed()
      .setColor("0x00ff00")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "http://pluspng.com/img-png/naver-logo-png-naver-300.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
