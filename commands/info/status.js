module.exports = {
    name: "mystatus",
    aliases: ["whatamidoing"],
    run: async (client, message, args) => {
        if (message.author.presence.game) {
            if (message.author.presence.game.name === "Custom Status") {
                message.channel.send(`**${message.author.presence.game.state}**`);
            } else {
                message.channel.send(`**${message.author.presence.game.name}**`);
            }
        } else {
            message.channel.send("Nothing");
        }
    }
}