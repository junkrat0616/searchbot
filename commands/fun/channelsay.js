module.exports = {
  name: "channelsay",
  run: async (client, message, args) => {
    const chan = client.channels.get(message.content.split(' ')[1].split('<#')[1].split('>')[0])
    message.delete()
    await chan.send(message.content.split(`${message.content.split(' ')[1]} `)[1])
  }
};
