const Discord = require("discord.js");

module.exports = {
  name: "report",
  aliases: ["reports"],
  run: async (client, message, args) => {
    if (message.deletable) message.delete();

    let rMember =
      message.mentions.members.first() || message.guild.members.get(args[0]);

    if (!rMember) return message.reply("Who is it").then(m => m.delete(5000));

    if (rMember.user.bot)
      return message.channel.send("Can't report that bot");

    if (!args[1])
      return message.channel
        .send("Please provide a reason for the report")
        .then(m => m.delete(5000));

    const channel = message.guild.channels.find(c => c.name === "reports");
    
    const embed = new Discord.RichEmbed()
      .setColor("29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp()
      .setDescription(`**Member:**  ${rMember} (${rMember.user.id})\n**Reported by:** ${message.author.username} (${message.author.id})\n**Reason:** ${args.slice(1).join(" ")}`);

    if (!channel)
      return message.guild.owner.send(embed)

    return channel.send(embed);
  }
};
