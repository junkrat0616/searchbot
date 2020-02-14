const Discord = require("discord.js");
module.exports = {
  name: "stack",
  aliases: ["stackover", "overflow"],
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "https://stackoverflow.com/search?q=" + message.content.split(sublink)[1];
    const link2 = link.replace(" ", "+");
    const embed = new Discord.RichEmbed()
      .setColor("0xFF8C00")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://media.wired.com/photos/5926db217034dc5f91becd6b/master/w_1904,c_limit/so-logo-s.jpg"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
