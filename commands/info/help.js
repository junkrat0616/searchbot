const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
module.exports = {
  name: "help",
  aliases: ["commands"],
  description: "Search Help",
  run: async (client, message, args) => {
    const embed = new RichEmbed()
      .setColor("29ffed")
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setTimestamp()
      .setTitle(`Search Commands`)
      .setDescription(
        "**Search** \n`?google [keyword]`: Searchs from Google \n`?bing [keyword]`: Searchs from Bing \n`?youtube [keyword]`: Searchs from Youtube \n`?Yahoo [keyword]`: Searchs from Yahoo \n`?naver [keyword]`: Searchs from Naver \n`?namuwiki [keyword]`: Searchs from NamuWiki \n`?daum [keyword]`: Searchs from Daum \n`?baidu`: Searchs from Baidu \n`?dreamwiz`: Searchs from DreamWiz \n`?duck`: Searchs from DuckDuckGo \n`?facebook`: Searchs from Facebook \n`?git`: Searchs from Github \n`?insta`: Searchs from Instagram \n`?nate`: Searchs from Nate \n`?wiki`: Searchs from Wikipedia \n`?zum`: Searchs from Zum\n\n**Info**\n`?help`: This command\n`?ping`: Get the Searchs ping\n`?userinfo (user mention)`: Get the user\'s info\n`?serverinfo`: Get the server's info\n`?botinfo`: Get this bot's info\n`?instauser [username]`: Get the instagram user\'s info\n`?servers`: Check the servers that Search is in\n`?uptime`: Gets the bots uptime\n~~`?downtime`: Gets the bots downtime~~\n\n**Moderation**\n`?ban [user]`: bans the user\n`?kick [user]`: kicks the user\n`?clear [number]`: deletes messages\n\n**Crawling**\n`?2b2t`: Get the status of 2b2t\n`?lyrics [song\'s name]`: Get the song\'s lyric\n`?shorturl [url]`: shortens the url\n`?checkmcserver [url]`: Gets the mincraft server\'s Status\n`?hangang`: Gets the Hangang\'s Temperature\n\n**Music**\n`?play [link or keyword]`: Plays an song\n`?leave`: Leave the voice channel\n`?pause`: Pauses the song\n`?resume`: Resumes the song\n`?skip`: Skips the Song(Not working now)\n`?queue`: Checks the queue\n`?ytsearch [keyword]`: searchs from youtube\n`?volume [integer]`: Sets the volume\n`?nowplaying`: Check what is playing\n`?nowlyrics`: Show the Lyrics of the music\n\n**Fun**\n`?say [sentence]`: Says a senctence\n`?channelsay [channel] [sententce]`: Says a sentence on the channel\n\n**Admin**\n`?announce [announcement]`: Sends an Announcement\n`?eval [code]`: Tests an code\n`?restart`: Restarts the bot\n\n**Helps from**\nditto7890#8948: Gave many source Codes\n! HG#0001: Gave many source Codes"
      );
    message.channel.send(embed);
  }
};
