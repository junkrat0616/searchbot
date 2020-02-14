const Discord = require("discord.js");
module.exports = {
  name: "announce",
  aliases: ["announcement"],
  description: "Send a announcement",
  run: async (client, message, args) => {
    if (message.author.id !== "647630912795836437") {
      message.channel.send("You don't  have the permission!!");
      return;
    }
    if (!args[0]) message.channel.send("Write Something");
    const Description = args.slice(0).join(" ");
    const noticeembed = new Discord.RichEmbed()
      .setTimestamp()
      .setTitle(`📢 SearchBot Announcement`)
      .setDescription(`${Description}`)
      .setColor("29ffed")
      .setFooter(message.author.username, message.author.displayAvatarURL);
    client.guilds.forEach(guild => {
      var gc = 0;
      guild.channels.forEach(channel => {
        if (
          channel.name.includes("봇-공지") ||
          channel.name.includes("봇_공지") ||
          channel.name.includes(":loudspeaker:봇_공지") ||
          channel.name.includes(":loudspeaker:봇-공지") ||
          channel.name.includes("키키봇") ||
          channel.name.includes("봇방")
        ) {
          if (channel.type === "text") {
            gc = channel.id;
          }
        }
      });
      if (!gc) return;
      let Ch = client.channels.get(gc);
      Ch.send(noticeembed);
    });
    await message.channel.send(
      new Discord.RichEmbed()
        .setTitle("Finished Sending the announcements to all servers")
        .setColor("29ffed")
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp()
    );
  }
};
