const Lyrics = require('slyrics')
const lyrics = new Lyrics()
const Discord = require('discord.js')

module.exports = {
    name: 'nowlyrics',
    aliases: ['nowlyric'],
    run: async (client, message, args, ops) => {
        let fetched = ops.active.get(message.guild.id);

        if (!fetched) return message.channel.send('No musics playing');

        if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('I need to be on a same voice channel with you');

        const result = await lyrics.get('melon', fetched.queue[0].songTitle)

        if (result.result === null) return message.channel.send(`Can't find the Lyrics`)
        
        const embed =  new Discord.RichEmbed()
            .setTitle(`${fetched.queue[0].songTitle}'s Lyrics`)
            .setDescription(result.result)
            .setColor("29ffed")
            .setFooter(message.author.username, message.author.displayAvatarURL)
            .setTimestamp()   
        
        message.channel.send(embed)
    }
}