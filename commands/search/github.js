const Discord = require("discord.js");
module.exports = {
  name: "github",
  aliases: ["git"],
  description: "Search Github",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "https://github.com/search?q=" + message.content.split(sublink)[1];
    const link2 = link.replace(" ", "+");
    const embed = new Discord.RichEmbed()
      .setColor("0x000000")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
