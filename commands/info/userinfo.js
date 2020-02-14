const { getMember } = require("../../functions.js");
const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require("moment-timezone");
moment.locale("ko-KR");

module.exports = {
  name: "myinfo",
  aliases: [
    "userinfo",
    "user-info",
    "user-information",
    "user",
    "info-user",
    "user_info"
  ],
  description: "Get the user's info",
  run: async (client, message, args) => {
    const member = getMember(message, args.join(" "));

    const roles =
      member.roles
        .filter(r => r.id !== message.guild.id)
        .map(r => r)
        .join(", ") || "없음";

    const joined = moment(member.joinedAt).format("YYYY-MM-DD HH-mm");
    const created = moment(member.user.createdAt).format(
      "YYYY-MM-DD HH-mm"
    );

    const embed = new Discord.RichEmbed()
      .setTitle(`${member.user.username} Info`)
      .setFooter(member.user.username, member.user.displayAvatarURL)
      .setThumbnail(member.user.displayAvatarURL)
      .setColor("29ffed")

      .addField(`Username`, `**${member.user.username}**`)
      .addField(`Display Name`, stripIndents`**${member.displayName}**`)
      .addField(`User Tag`, `**${member.user.tag}**`);

    if (
      member.user.presence.status !== "offline" &&
      member.user.bot === false
    ) {
      if (member.user.presence.clientStatus.desktop) {
        embed.addField(`Client`, `**App**`);
      } else if (member.user.presence.clientStatus.web) {
        embed.addField(`Client`, `**Web**`);
      } else if (member.user.presence.clientStatus.mobile) {
        embed.addField(`Client`, `**Moblie**`);
      }
    }

    embed.addField("ID", stripIndents`**${member.user.id}**`);

    if (member.user.presence.status === "online") {
      embed.addField("Status", `Online**`);
    } else if (member.user.presence.status === "idle") {
      embed.addField("Status", `**IDLE**`);
    } else if (member.user.presence.status === "dnd") {
      embed.addField("Status", `**DND**`);
    } else if (member.user.presence.status === "offline") {
      embed.addField("Status", `**Offline**`);
    }

    embed.addField("Server Signup", `**${joined}**`);
    embed.addField("Discord SignUp", `**${created}**`);
    embed.setTimestamp();

    if (member.user.presence.game) {
      if (member.user.presence.game.name === "Custom Status") {
        embed.addField("Doing", `**${member.user.presence.game.state}**`);
      } else {
        embed.addField("Doing", `**${member.user.presence.game.name}**`);
      }
    } else {
      embed.addField("Doing", `**None**`);
    }

    const embed2 = new Discord.RichEmbed()
      .setTitle(`${member.user.username}\'s Roles (${member.roles.size - 1})`)
      .setDescription(`**${roles}**`)
      .setColor("29ffed")
    message.channel.send(embed);
    message.channel.send(embed2);
  }
};
