module.exports = {
  name: "clean",
  aliases: ["clear", "deletemessage", "delete"],
  run: async (client, message, args) => {
    if (message.deletable) {
      message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message
        .reply("You don't have permission")
        .then(m => m.delete(5000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
      return message
        .reply(
          "Enter the number of messages to delete `?clear <number of messages to delete>`"
        )
        .then(m => m.delete(5000));
    }

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
      return message
        .reply("Search needs premission MANAGE_MESSAGES")
        .then(m => m.delete(5000));
    }

    let deleteAmount;

    if (parseInt(args[0]) > 100) {
      deleteAmount = 100;
    } else {
      deleteAmount = parseInt(args[0]);
    }

    message.channel
      .bulkDelete(deleteAmount, true)
      .then(deleted =>
        message.channel.send(`Deleted \`${deleted.size}\` messages`)
      )
      .then(m => m.delete(3800))
      .catch(err => message.reply(`There is an error!`));
  }
};
