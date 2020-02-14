const Discord = require("discord.js");
module.exports = {
  name: "fireworks",
  aliases: ["firework"],
  run: async (client, message, args, ops, vip) => {  
    if(!vip.includes(message.author.id)) return message.reply('You are not a Premium member')
    if (!args[0]) message.channel.send("Write Something");
    const Description = args.slice(0).join(" ");
    message.guild.channels.forEach(channel => {
      if(channel.type == 'text' && channel.manageable){
        channel.send(Description)
      }
    })
  
    await message.channel.send('Are you a troll');
  }
};
