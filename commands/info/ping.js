const Discord = require("discord.js");
module.exports = {
  name: "ping",
  aliases: ["pong"],
  description: "Search Ping",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
      .setColor("29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp()
      .setTitle(`🏓 **Pinging...**`)
      .setDescription(`🏓 Ping...`);
    const msg = await message.channel.send(embed);
    embed.setTitle("🏓 **Pong**");
    embed.setDescription(
      `Latency is **${Math.floor(
        msg.createdAt - message.createdAt
      )}ms (${Math.floor(msg.createdAt - message.createdAt) /
        1000}s)**\nAPI Latency is **${Math.round(client.ping)}ms (${Math.round(
        client.ping
      ) / 1000}s)**`
    );

    msg.edit(embed);
  }
};
