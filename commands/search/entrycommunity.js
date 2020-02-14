const Discord = require("discord.js");
module.exports = {
  name: "entrycomu",
  aliases: ["entrycommunity", "엔이", "엔트리이야기"],
  description: "Search Daum",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link = `https://playentry.org/ds#!/free?title=${
      message.content.split(sublink)[1]
    }&search_title=${
      message.content.split(sublink)[1]
    }&sort=created&rows=20&page=1`;
    const link2 = link.replace(" ", "%20");
    const embed = new Discord.RichEmbed()
      .setColor("0x008000")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setAuthor(
        `${message.content.split(sublink)[1]} Search Results`,
        "https://playentry.org/img/assets/og-entry.png"
      )
      .setTimestamp()
      .setTitle(`[ Go To ]`)
      .setURL(link2);
    await message.channel.send(embed);
  }
};
