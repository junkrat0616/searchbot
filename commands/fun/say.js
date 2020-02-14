module.exports = {
  name: "say",
  run: async (client, message, args) => {
    message.delete()
    await message.channel.send(message.content.split('?say ')[1])
  }
};
