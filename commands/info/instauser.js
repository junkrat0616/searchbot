const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
  name: "instauser",
  description: "Get the instagram users info",
  run: async (client, message, args) => {
    try {
      const name = args.join(" ");

      if (!name) {
        return message.reply("Enter the User's name").then(m => m.delete(5000));
      }

      const url = `https://www.instagram.com/${name}/?__a=1`;
      const res = await fetch(url).then(url => url.json());

      if (!res.graphql.user.username) {
        return message.reply("Can't find the user").then(m => m.delete(5000));
      }

      const account = res.graphql.user;

      const embed = new RichEmbed()
        .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
        .setColor("29ffed")
        .setTitle(account.full_name)
        .setURL(account.external_url_linkshimmed)
        .setThumbnail(account.profile_pic_url_hd)
        .addField(
          "User Info",
          stripIndents`**> User name:** ${account.username}
            **> Name:** ${account.full_name}
            **> Biography:** ${
              account.biography.length == 0 ? "None" : account.biography
            }
            **> Is Private:** ${account.is_private ? "Private" : "Not Private"}
            **> Profile link:** https:\//www.instagram.com/${name}`
        );

      message.channel.send(embed);
    } catch {
      return message
        .reply("Error while finding the user")
        .then(m => m.delete(5000));
    }
  }
};
