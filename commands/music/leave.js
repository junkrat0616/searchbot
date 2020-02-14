module.exports = {
    name: "leave",
    aliases: ["out"],
    run: async (client, message, args, ops) => {
        if (!message.member.voiceChannel) return message.channel.send('Enter this voice channel')

        if (!message.guild.me.voiceChannel) return message.channel.send('I already leaved the voice channel')

        if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('I need to be on a same voice channel with you')

        message.guild.me.voiceChannel.leave()

        message.channel.send('I leaved the voice channel');
    }
}