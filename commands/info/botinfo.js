const Discord = require("discord.js");
const moment = require("moment-timezone");
moment.locale("ko-KR");

module.exports = {
  name: "infobot",
  aliases: ["bot_info", "botinfo"],
  run: async (client, message, args) => {
    const created = moment(client.user.createdAt).format("YYYY-MM-DD");

    const m = await message.channel.send(`🏓 **Pinging...**`);

    const embed = new Discord.RichEmbed()
      .setTitle(`${client.user.username} Info`)
      .setColor(0x00ff00)
      .setThumbnail(client.user.displayAvatarURL)
      .setDescription(`> Bot name: **${client.user.username}**
            > Bot ID: **${client.user.id}**
            > Bot Birthday: **${created}**
            > Bot Developer: **키키#1778**
            > Bot Invite: **\`?invite\`**
            > Servers that Search is in: **${client.guilds.size}**
            > Users that use Search: **${client.users.size}**
            > Channels that Search is in: **${client.channels.size}**
            > Uptime: **${duration(client.uptime)}**
            > **🏓 Ping**
            > Latency: **${Math.floor(
              m.createdAt - message.createdAt
            )}ms (${Math.floor(m.createdAt - message.createdAt) / 1000}초)**
            > API Latency: **${Math.round(client.ping)}ms (${Math.round(
      client.ping
    ) / 1000}초)**
            > Developed Language: **Javascript**}
            > Node.js Version: **v13.5.0**
            > Discord.js Version: **v11.5.1**`);

    m.edit(embed);
  }
};

function duration(ms) {
  const sec = Math.floor((ms / 1000) % 60).toString();
  const min = Math.floor((ms / (1000 * 60)) % 60).toString();
  const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
  const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
  return `${days.padStart(1, "0")}-${hrs.padStart(2, "0")}-${min.padStart(
    2,
    "0"
  )}-${sec.padStart(2, "0")}`;
}
