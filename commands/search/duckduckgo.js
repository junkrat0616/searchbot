const Discord = require("discord.js");
module.exports = {
  name: "duckduckgo",
  aliases: ["duck", "duckduck", "duckgo"],
  description: "Search Daum",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link =
      "https://duckduckgo.com/?q=" + message.content.split(sublink)[1];
    const link2 = link.replace(" ", "+");
    const embed = new Discord.RichEmbed()
      .setColor("0xff9600")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://blogs-images.forbes.com/drewhendricks/files/2014/06/DuckDuckGo-Logo.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
