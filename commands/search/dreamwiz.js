const Discord = require("discord.js");
module.exports = {
  name: "dreamwiz",
  aliases: ["dreamwizsearch"],
  description: "Search Dreamwiz",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "http://search.dreamwiz.com/?cddtc=&sword=" +
      message.content.split(sublink)[1];
    const link2 = link.replace(" ", "+");
    const embed = new Discord.RichEmbed()
      .setColor("0xDEAD0D")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/DreamWiz_logo.png/150px-DreamWiz_logo.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
