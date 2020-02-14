const Discord = require("discord.js");

module.exports = {
    name: "nowplaying",
    run: async (client, message, args, ops) => {
        let fetched = ops.active.get(message.guild.id);

        if (!fetched) return message.channel.send('No musics playing')

        if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('I need to be on a same voice channel with you')

        let queue = fetched.queue;
        let nowPlaying = queue[0];

        const embed = new Discord.RichEmbed()
            .setColor("29ffed")
            .setTitle(`${nowPlaying.songTitle}`)
            .setURL(`${nowPlaying.url}`)
            .setTimestamp()
            .setDescription(`**${nowPlaying.songTitle}** Playing...\n**${nowPlaying.requester}**`)
            .setThumbnail(`https://img.youtube.com/vi/${nowPlaying.thumbnail}/default.jpg`)
            .setFooter(message.author.username, message.author.displayAvatarURL)

        message.channel.send(embed)
    }
}