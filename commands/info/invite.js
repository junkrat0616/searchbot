const Discord = require("discord.js");
module.exports = {
  name: "invite",
  aliases: ["bot", "search"],
  description: "Invite Search",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
      .setColor("0x29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp()
      .setTitle(`[ Invite ]`)
      .setURL(
        "https://discordapp.com/api/oauth2/authorize?client_id=676003241129017354&permissions=76864&scope=bot"
      );
    await message.channel.send(embed);
  }
};
