module.exports = {
  name: "uptim",
  aliases: ["uptime"],
  run: async (client, message, args) => {
    function duration(ms) {
      const sec = Math.floor((ms / 1000) % 60).toString();
      const min = Math.floor((ms / (1000 * 60)) % 60).toString();
      const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
      const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
      return `${days.padStart(1, "0")} days ${hrs.padStart(
        2,
        "0"
      )}h ${min.padStart(2, "0")}m ${sec.padStart(2, "0")}s`;
    }

    message.channel.send(`${duration(client.uptime)}`);
  }
};
