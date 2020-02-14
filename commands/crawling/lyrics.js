const Lyrics = require("slyrics");
const lyrics = new Lyrics();
const Discord = require("discord.js");

module.exports = {
  name: "lyric",
  aliases: ["lyrics"],
  description: "Search an lyric",
  run: async (client, message, args, tools) => {
    if (!args[0]) {
      return message
        .reply("Please enter a song's name")
        .then(m => m.delete(5000));
    }
    const result = await lyrics.get("melon", args[0].toString());
    const embed = new Discord.RichEmbed()
      .setTitle(`${args[0].toString()}'s Lyrics'`)
      .setDescription(result.result.toString())
      .setColor("29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp();

    message.channel.send(embed);
  }
};
