const Discord = require('discord.js')
module.exports = {
    name: 'wikipedia',
    aliases: ['wiki'],
    description: 'Search Namuwiki',
    run: async (client, message, args) => {
        const sublink = message.content.split(' ')[0]+' '
        const link = 'https://wikipedia.org/wiki/'+message.content.split(sublink)[1]
        const link2 = link.replace(' ', '+')
        const embed = new Discord.RichEmbed()
        .setColor('0xffffff')
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setAuthor(`${message.content.split(sublink)[1]} Search Results`, 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Wikipedia-logo-v2-it.svg/892px-Wikipedia-logo-v2-it.svg.png')   
        .setTimestamp()
        .setTitle(`[ Go To ]`)
        .setURL(link2)
        await message.channel.send(embed)
    }
}