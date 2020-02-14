const Discord = require("discord.js");
module.exports = {
  name: "yahoo",
  aliases: ["yah", "ahoo", "yaho", "yahooing"],
  description: "Search Yahoo",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "https://search.yahoo.com/search?p=" + message.content.split(sublink)[1];
    const link2 = link.replace(" ", "+");
    const embed = new Discord.RichEmbed()
      .setColor("0x7B0099")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://image.flaticon.com/icons/png/512/179/179345.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
