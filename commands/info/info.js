const Discord = require("discord.js");
module.exports = {
  name: "info",
  description: "Info about info",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
      .setColor("0x29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp()
      .setTitle(`Info`)
      .setDescription(
        "`?serverinfo`: Get the server's info\n`?userinfo (user mention)`: Get the user's info\n`?botinfo`: Get this bot's info"
      );
    await message.channel.send(embed);
  }
};
