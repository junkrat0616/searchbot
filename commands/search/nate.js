const Discord = require("discord.js");
module.exports = {
  name: "nate",
  description: "Search Nate",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "https://search.daum.net/nate?q=" + message.content.split(sublink)[1];
    const link2 = link.replace(" ", "%20");
    const embed = new Discord.RichEmbed()
      .setColor("0xAF002A")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://upload.wikimedia.org/wikipedia/ko/thumb/9/9c/Nate_2009_logo.svg/1280px-Nate_2009_logo.svg.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
