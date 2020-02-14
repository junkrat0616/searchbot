const Discord = require("discord.js");

module.exports = {
  name: "poll",
  aliases: ["poller", "vote"],
  run: async (client, message, args) => {
    try {
      var str = message.content
        .split(message.content.split(" ")[0] + " ")[1]
        .split("$");
    } catch {
      await message.reply(" No subject to vote");
      return;
    }
    if (!str[1]) {
      await message.reply(" There vote must have two or more items");
      return;
    }
    if (!str[2]) {
      await message.reply(" There vote must have two or more items");
      return;
    }
    var string = "";
    const embed = new Discord.RichEmbed()
      .setTitle(str[0])
      .setColor("29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp();

    for (var i = 1; i < str.length; i++) {
      if (i >= 10) {
        embed.setDescription(string);
        message.channel.send(embed);
        message.channel.send("Items must be less then 10");
        return;
      }
      string += `**${i}.** ${str[i]}\n`;
    }
    embed.setDescription(string);
    const msg = await message.channel.send(embed);
    for (var i = 1; i < str.length; i++) {
      if (i >= 10) {
        embed.setDescription(string);
        message.channel.send(embed);
        message.channel.send("Items must be less then 10");
        return;
      }
      switch (i) {
        case 1:
          msg.react("1️⃣");
          break;
        case 2:
          msg.react("2️⃣");
          break;
        case 3:
          msg.react("3️⃣");
          break;
        case 4:
          msg.react("4️⃣");
          break;
        case 5:
          msg.react("5️⃣");
          break;
        case 6:
          msg.react("6️⃣");
          break;
        case 7:
          msg.react("7️⃣");
          break;
        case 8:
          msg.react("8️⃣");
          break;
        case 9:
          msg.react("9️⃣");
          break;
        case 10:
          msg.react("🔟");
          break;
      }
    }
  }
};
