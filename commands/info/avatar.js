const Discord = require("discord.js");
const { getMember } = require("../../functions.js");

module.exports = {
  name: "avatar",
  alliases: ["profileimage", "myimage"],
  usage: "[id, | mention]",
  run: async (client, message, args) => {
    const member = getMember(message, args.join(" "));

    const embed = new Discord.RichEmbed()
      .setColor("29ffed")
      .setTitle(`${member.displayName}'s avatar`)
      .setURL(member.user.displayAvatarURL)
      .setImage(member.user.displayAvatarURL);
    message.channel.send(embed);
  }
};
