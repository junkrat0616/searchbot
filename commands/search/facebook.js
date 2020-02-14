const Discord = require("discord.js");
module.exports = {
  name: "facebook",
  aliases: ["faceb", "fbook"],
  description: "Search Facebook",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "https://www.facebook.com/help/search/?query=" +
      message.content.split(sublink)[1];
    const link2 = link.replace(" ", "%20");
    const embed = new Discord.RichEmbed()
      .setColor("0x3b5998")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1200px-Facebook_logo_36x36.svg.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
