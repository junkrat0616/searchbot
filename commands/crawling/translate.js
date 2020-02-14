const Discord = require("discord.js");
const translate = require("@vitalets/google-translate-api");

module.exports = {
  name: "translate",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
      .setTitle("Google Translate")
      .setColor("29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp();

    if (!args[0]) return message.reply(`Please enter a value`);

    const msgArgs = args.slice(0).join(" ");

    translate(`${msgArgs}`, {
      to: translate.languages.getCode("English")
    }).then(res => {
      embed.setDescription(`**${res.text}**`);
      message.channel.send(embed);
    });
  }
};
