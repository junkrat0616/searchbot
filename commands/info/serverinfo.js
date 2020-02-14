const Discord = require("discord.js");
const moment = require("moment-timezone");
moment.locale("ko-KR");

module.exports = {
  name: "serverinfo",
  description: "Server's info",
  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
      .setTitle(`${message.guild.name} Server Info`)
      .setColor("29ffed")
      .setThumbnail(message.guild.iconURL)
      .setFooter(message.guild.name, message.guild.iconURL)
      .addField(
        "Administer",
        `**${message.guild.owner.user.username}\n(ID: ${message.guild.ownerID})**`
      );

    if (message.guild.region === "south-korea") {
      embed.addField("Server Region", `**:flag_kr: South Korea**`);
    } else if (message.guild.region === "japan") {
      embed.addField("Server Region", `**:flag_jp: Japan**`);
    } else if (message.guild.region === "brazil") {
      embed.addField("Server Region", `**:flag_br: Brazil**`);
    } else if (message.guild.region === "india") {
      embed.addField("Server Region", `**:flag_in: India**`);
    } else if (message.guild.region === "europe") {
      embed.addField("Server Region", `**:flag_eu: Europe**`);
    } else if (message.guild.region === "hongkong") {
      embed.addField("Server Region", `**:flag_hk: Hong Kong**`);
    } else if (message.guild.region === "russia") {
      embed.addField("Server Region", `**:flag_ru: Russia**`);
    } else if (message.guild.region === "southafrica") {
      embed.addField("Server Region", `**:flag_za: South Africa**`);
    } else if (message.guild.region === "singapore") {
      embed.addField("Server Region", `**:flag_sg: Singapore**`);
    } else if (message.guild.region === "sydney") {
      embed.addField("Server Region", `**:flag_au: Sydney**`);
    } else if (message.guild.region === "us-central") {
      embed.addField("Server Region", `**:flag_us: US Central**`);
    } else if (message.guild.region === "us-east") {
      embed.addField("Server Region", `**:flag_us: US East**`);
    } else if (message.guild.region === "us-south") {
      embed.addField("Server Region", `**:flag_us: US South**`);
    } else if (message.guild.region === "us-west") {
      embed.addField("Server Region", `**:flag_us: US West**`);
    }

    embed.addField("Server ID", `**${message.guild.id}**`);
    embed.addField(
      "Server Users",
      `**ALL: ${message.guild.memberCount} (USER: ${message.guild.memberCount -
        message.guild.members.filter(member => member.user.bot).size} | BOT: ${
        message.guild.members.filter(member => member.user.bot).size
      })**`
    );

    const created = moment(message.guild.createdAt).format("YYYY-MM-DD HH-mm");

    embed.addField("Server Created At", `**${created}**`);
    embed.addField(
      "Server Channels",
      `**ALL: ${message.guild.channels.size} (CHANNEL: ${
        message.guild.channels.filter(channel => channel.parent).size
      } | CATEGORY: ${message.guild.channels.size -
        message.guild.channels.filter(channel => channel.parent).size})**`
    );
    if (message.guild.afkChannel === null) {
      embed.addField("Server MIA Channel", `**None**`);
    } else {
      embed.addField(
        "Server MIA Channel",
        `**${message.guild.afkChannel.name}**`
      );
      if (message.guild.afkTimeout === 60) {
        embed.addField("Server MIA Timer", `**1m**`);
      } else if (message.guild.afkTimeout === 300) {
        embed.addField("Server MIA Timer", `**5m**`);
      } else if (message.guild.afkTimeout === 900) {
        embed.addField("Server MIA Timer", `**15m**`);
      } else if (message.guild.afkTimeout === 1800) {
        embed.addField("Server MIA Timer", `**30m**`);
      } else if (message.guild.afkTimeout === 3600) {
        embed.addField("Server MIA Timer", `**1m**`);
      }
    }

    if (message.guild.verificationLevel === 0) {
      embed.addField("Server Security", `**None**`);
    } else if (message.guild.verificationLevel === 1) {
      embed.addField(
        "Server Security",
        `**Must have verified email on their Discord account**`
      );
    } else if (message.guild.verificationLevel === 2) {
      embed.addField(
        "Server Security",
        `**Must also be registered on Discord for longer than 5 minutes**`
      );
    } else if (message.guild.verificationLevel === 3) {
      embed.addField(
        "Server Security",
        `**Must also be registered on Discord for longer than 10 minutes**`
      );
    } else if (message.guild.verificationLevel === 4) {
      embed.addField(
        "Server Security",
        `**Must have a verified phone on their Discord account**`
      );
    }

    if (message.guild.systemChannel === null) {
      embed.addField("Server System Message Channel", `**None**`);
    } else {
      embed.addField(
        "Server System Message Channel",
        `**${message.guild.systemChannel.name}**`
      );
    }

    if (message.guild.explicitContentFilter === 2) {
      embed.addField(
        "Server Harmful Media Scan",
        `**Scan media content from all members**`
      );
    } else if (message.guild.explicitContentFilter === 1) {
      embed.addField(
        "Server Harmful Media Scan",
        `**Scan media from members without a role**`
      );
    } else if (message.guild.explicitContentFilter === 0) {
      embed.addField(
        "Server Harmful Media Scan",
        `**Don't Scan any media content**`
      );
    }

    const role =
      message.guild.roles
        .filter(r => r.id !== message.guild.id)
        .map(r => r)
        .join(", ") || "None";

    const embed2 = new Discord.RichEmbed()
      .setColor(0xffff00)
      .setTitle(
        `${message.guild.name} Server Emojis (${message.guild.roles.size - 1})`
      )
      .setDescription(`**${role}**`);

    const embed3 = new Discord.RichEmbed().setColor(0xffff00);
    embed3.setTitle(
      `${message.guild.name} Server Emojis (${message.guild.emojis.size})`
    );

    if (message.guild.emojis.size === 0) {
      embed3.setDescription(`**None**`);
    } else {
      embed3.setDescription(
        `**${message.guild.emojis.map(e => e.toString()).join(" ")}**`
      );
    }

    message.channel.send(embed);

    if (
      message.member.hasPermission("MANAGE_ROLES") &&
      message.guild.me.hasPermission("MANAGE_ROLES")
    ) {
      message.channel.send(embed2);
    }

    if (
      message.member.hasPermission("MANAGE_EMOJIS") &&
      message.guild.me.hasPermission("MANAGE_EMOJIS")
    ) {
      message.channel.send(embed3);
    }
  }
};
