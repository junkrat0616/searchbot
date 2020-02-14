const search = require("yt-search")
const Discord = require("discord.js")

module.exports = {
    name: "ytsearch",
    aliases: ["youtubesearch"],
    run: async (client, message, args) => {
        if (!args[0]) return message.channel.send('Enter what to search')
        
        const m = await message.channel.send('Searching')

        search(args.join(" "), function (err, res) {
            if (err) return message.channel.send(`Error... ${err}`);

            let videos = res.videos.slice(0, 5);

            const embed = new Discord.RichEmbed()
                .setTitle(`"${args.join(" ")}" Search Results`)
                .setColor("29ffed")

            let resp = '';

            for (var i in videos) {
                resp += `${parseInt(i)+1}. **${videos[i].title}**\n${videos[i].url}\n\n`;
            }

            embed.addField('Search Results', `${resp}`)

            m.edit(embed);
        })
    }
}