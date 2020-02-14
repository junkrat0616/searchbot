const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");

module.exports = {
  name: "kickfromserver",
  aliases: ["kick"],
  usage: "[id, | mention]",
  run: async (client, message, args) => {
    if (message.deletable) message.delete();

    if (!args[0]) {
      return message
        .reply("Please mention or write the id of the user you wants to kick")
        .then(m => m.delete(5000));
    }

    if (!message.member.hasPermission("KICK_MEMBERS")) {
      return message
        .reply("You don't have permission")
        .then(m => m.delete(5000));
    }

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message
        .reply("Search needs premission KICK_MEMBERS")
        .then(m => m.delete(5000));
    }

    const toKick =
      message.mentions.members.first() || message.guild.members.get(args[0]);

    if (!toKick) {
      return message
        .reply("Search can' find the user")
        .then(m => m.delete(5000));
    }

    if (message.author.id === toKick.id) {
      return message.reply("You can' kick yourself").then(m => m.delete(5000));
    }

    if (!toKick.kickable) {
      return message
        .reply("The User has higher roles than me")
        .then(m => m.delete(5000));
    }

    const embed = new Discord.RichEmbed()
      .setThumbnail(toKick.user.displayAvartarURL)
      .setColor("29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp()
      .setDescription(stripIndents`**> Kicked User: **${toKick} (${toKick.id})
            **> User that Kicked: **${message.author} (${message.author.id})`);

    const promtEmbed = new Discord.RichEmbed()
      .setAuthor("")
      .setDescription(`Will you kick **${toKick}**?`)
      .setColor("29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp();

    message.channel.send(promtEmbed).then(async msg => {
      const emoji = await promptMessage(msg, message.author, 30, ["✅", "❎"]);

      if (emoji === "✅") {
        msg.delete();

        toKick.kick(args.slice(1).join(" ")).catch(err => {
          if (err)
            return message.reply(
              "An error Appeared ~~Because You did something silly!~~"
            );
        });
      } else if (emoji === "❎") {
        msg.delete();

        message.reply("Canceled kicking that user").then(m => m.delete(5000));
      }
    });
  }
};
