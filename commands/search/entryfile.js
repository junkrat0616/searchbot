const Discord = require("discord.js");
module.exports = {
  name: "entry",
  aliases: ["entrfile", "엔작", "엔트리작품"],
  description: "Search Entry",
  run: async (client, message, args) => {
    const sublink = message.content.split(" ")[0] + " ";
    const link = `https://playentry.org/all#!/?sort=updated&rows=12&page=1&name=$  {
      message.content.split(sublink)[1]
    }`;
    const link2 = link.replace(" ", "%20");
    console.log(link2)
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
