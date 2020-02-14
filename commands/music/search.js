const search = require("yt-search");
const Discord = require("discord.js");

module.exports = {
    name: "ytsearch",
    run: async (client, message, args, ops) => {

        search(args.join(" "), function (err, res) {
            if (err) return message.channel.send(`Error... ${err}`);
        
            let videos = res.videos.slice(0, 1);
        
            let resp = '';
            
            for (var i in videos) {
                resp += `${videos[i].title}`
            }

            let commandFile = require(`./play.js`);
            commandFile.run(client, message, [videos[i].url], ops);
        })
    }
}