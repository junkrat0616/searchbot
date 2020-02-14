const Discord = require("discord.js");
module.exports = {
  name: "zum",
  aliases: ["zumsearch"],
  description: "Search Zum",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "http://search.zum.com/search.zum?query=" +
      message.content.split(sublink)[1];
    const link2 = link.replace(" ", "%20");
    const embed = new Discord.RichEmbed()
      .setColor("0x0017AF")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://t1.daumcdn.net/cfile/tistory/9983213F5BC83BE909"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
