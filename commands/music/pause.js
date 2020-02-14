module.exports = {
    name: "pause",
    run: async (client, message, args, ops) => {
        let fetched = ops.active.get(message.guild.id);

        if (!fetched) return message.channel.send('No musics playing');

        if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('I need to be on a same voice channel with you');

        if (fetched.dispatcher.paused) return message.channel.send('That music is already paused!');

        fetched.dispatcher.pause();

        message.channel.send(`**${fetched.queue[0].songTitle}**is paused`)
    }
}