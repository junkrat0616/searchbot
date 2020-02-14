const Discord = require("discord.js");

module.exports = {
    name: "queue",
    aliases: ["que", 'playlist', 'playlists'],
    run: async (client, message, args, ops) => {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setColor(0xffff00)
            .setTimestamp()

        let fetched = ops.active.get(message.guild.id);

        if (!fetched) return message.channel.send('No music playing!')

        let queue = fetched.queue;
        let nowPlaying = queue[0];

        let resp = `**${nowPlaying.songTitle}** Playing...\nAdd: **${nowPlaying.requester}**\n\n**List**\n`;

        for (var i = 1; i < queue.length; i++) {
            resp += `${i}. **${queue[i].songTitle}** - ${queue[i].requester}\n`;
        }
        
        embed.setDescription(`${resp}`)

        message.channel.send(embed);
    }
}