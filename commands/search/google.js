const Discord = require("discord.js");
module.exports = {
  name: "google",
  aliases: ["gg", "oogle", "goog", "googling"],
  description: "Search Google",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "http://google.com/search?q=" + message.content.split(sublink)[1];
    const link2 = link.replace(" ", "%20");
    const embed = new Discord.RichEmbed()
      .setColor("0xff1a1a")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
