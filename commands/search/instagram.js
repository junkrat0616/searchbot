const Discord = require("discord.js");
module.exports = {
  name: "instagram",
  aliases: ["insta", "stagram"],
  description: "Search Instagram",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "https://www.instagram.com/explore/tags/" +
      message.content.split(sublink)[1];
    const link2 = link.replace(" ", "");
    const embed = new Discord.RichEmbed()
      .setColor("0x8134af")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://logosmarcas.com/wp-content/uploads/2018/05/Instagram-logo.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
