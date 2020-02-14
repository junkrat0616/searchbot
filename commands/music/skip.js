const Discord = require("discord.js")

module.exports = {
    name: "skip",
    aliases: ['skipmusic'],
    run: async (client, message, args, ops) => {
        let fetched = ops.active.get(message.guild.id)

        if (!fetched) return message.channel.send('No musics playing')

        if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('I need to be on a same voice channel with you');
      
        await message.channel.send('We are making this command')
        /*let userCount = message.member.voiceChannel.members.size;
        let required = Math.ceil(userCount/2)
        if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = []
        if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`You already voted **${fetched.queue[0].voteSkips.length}/${required}**`)
        fetched.queue[0].voteSkips.push(message.member.id);
        ops.active.set(message.guild.id, fetched);
        if (fetched.queue[0].voteSkips.length >= required) {
            const embed = new Discord.RichEmbed()
                .setTitle(`${fetched.queue[0].songTitle} Skipped`)
                .setURL(`${fetched.queue[0].url}`)
                .setColor(0xffff00)
                .setFooter(message.author.username, message.author.displayAvatarURL)
                .setThumbnail(`https://img.youtube.com/vi/${fetched.queue[0].thumbnail}/default.jpg`)
            message.channel.send(embed);
            return fetched.dispatcher.emit('finish')
        }
        message.channel.send(`You voted at **Skip** **${fetched.queue[0].voteSkips.length}/${required}**`)*/
    }
}