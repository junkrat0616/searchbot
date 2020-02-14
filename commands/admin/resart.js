const { RichEmbed } = require("discord.js");

module.exports = {
  name: "restart",
  description: "Restart Search",
  run: async (client, message, args) => {
    if (message.author.id !== "647630912795836437") {
      message.reply("You are not an admin of this bot!");
      return;
    }

    try {
      message.react("👌");
      await message.channel.send("Restarting...");
      await message.channel.send("🖐️");
      process.exit(1);
    } catch (e) {
      message.channel.send(`에러: ${e.message}`);
    }
  }
};
