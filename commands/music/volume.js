module.exports = {
    name: "volume",
    aliases: ["vol"],
    run: async (client, message, args, ops) => {
        let fetched = ops.active.get(message.guild.id);

        if (!fetched) return message.channel.send('No musics playing');

        if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('I need to be on a same voice channel with you');

        if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('Enter number between 1 ~ 200')

        fetched.dispatcher.setVolume(args[0]/100);

        message.channel.send(`Set the musics volume **${args[0]}**`);
    }
}