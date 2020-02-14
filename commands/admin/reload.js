const fs = require("fs");
const Discord = require("discord.js");

module.exports = {
  name: "reload",
  aliases: ["upload"],
  run: async (client, message, args, ops) => {
    if (message.author.id !== ops.ownerID)
      return message.channel
        .send("You are not an admin of this bot!")
        .then(m => m.delete(5000));

    var str = "*Could take a long long time*\n\n";
    var embed = new Discord.RichEmbed()
      .setTitle("Reload Status")
      .setDescription(str)
      .setColor("29ffed")
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp();

    const m = await message.channel.send(embed);

    fs.readdirSync("./commands/").forEach(dir => {
      const commands = fs
        .readdirSync(`./commands/${dir}`)
        .filter(f => f.endsWith(".js"));

      for (let file of commands) {
        let pull = require(`../${dir}/${file}`);
        var str2 = `${client.emojis.find(x => x.id == "677490591130583060")} ${dir}/${file}\n`;
        embed.setDescription(`${str}${str2}`)
        m.edit(embed);

        if (pull.name) {
          delete require.cache[require.resolve(`../${dir}/${file}`)];
          client.commands.delete(pull);
          client.commands.set(pull.name, pull);
          str2 = `${client.emojis.find(x => x.id == "677490576664559627")} ${dir}/${file}\n`;
          str += str2;
          embed.setDescription(str)
        m.edit(embed);
        } else {
          str2 = `${client.emojis.find(x => x.id == "677490631941292072")} ${dir}/${file}\n`;
          str += str2;
          embed.setDescription(str)
          continue;
        }
      }
    });
    embed.setDescription('Completed')
    m.edit(embed);
  }
};
