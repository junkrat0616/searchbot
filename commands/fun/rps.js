const Discord = require("discord.js");
const { promptMessage } = require("../../functions.js");

const chooseArr = ["✌", "✊", "✋"];

module.exports = {
    name: "rps",
    aliases: ["rock paper scissor", 'rockpaperscissor'],
    run: async (client, message, args) => {
        const embed = new Discord.RichEmbed()
            .setColor("29ffed")
            .setFooter(message.author.username, message.author.displayAvatarURL)
            .setTitle("**React to play Rock Paper Scissor**")
            .setTimestamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.clearReactions();

        embed
            .setTitle(`${result}`)
            .setDescription(`**${reacted} vs ${botChoice}**`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "✊" && clientChosen === "✌") ||
                (me === "✋" && clientChosen === "✊") ||
                (me === "✌" && clientChosen === "✋")) {
                    return "You won!";
            } else if (me === clientChosen) {
                return "It's a tie";
            } else {
                return "You lost";
            }
        }
    }
}