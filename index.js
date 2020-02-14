const { Client, Collection, RichEmbed } = require("discord.js");
const { config } = require("dotenv");
const packages = require("./package.json");
const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const client = new Client({
  disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();
client.catagories = fs.readdirSync("./commands/");

config({
  path: __dirname + "/.env"
});

["command"].forEach(handler => {
  require(`./handler/${handler}`)(client);
});

const prefix = "?";
const token = process.env.TOKEN;
const active = new Map();

client.on("guildCreate", async guild => {
  guild.owner.send(
    new RichEmbed()
      .setTitle("Thanks for Inviting me")
      .setColor("29ffed")
      .setFooter(guild.owner.user.username, guild.owner.user.displayAvatarURL)
      .setTimestamp()
  );
});

client.on("guildMemberAdd", member => {
  var gc = 0;
  member.guild.channels.forEach(channel => {
    if (
      channel.name.includes("인사") ||
      channel.name.includes("search봇") ||
      channel.name.includes("봇방")
    ) {
      if (channel.type === "text") {
        gc = channel.id;
      }
    }
  });
  if (!gc) return;
  let Ch = client.channels.get(gc);
  Ch.send(`${member}, Hello`);
});

client.on("guildMemberRemove", member => {
  var gc = "";
  member.guild.channels.forEach(channel => {
    if (
      channel.name.includes("인사") ||
      channel.name.includes("search봇") ||
      channel.name.includes("봇방")
    ) {
      if (channel.type === "text") {
        gc = channel.id;
      }
    }
  });
  if (!gc) return;
  let Ch = client.channels.get(gc);
  Ch.send(`${member}, Bye`);
});

client.on("ready", () => {
  console.log("==========================");
  console.log(`| ID: ${client.user.id} |`);
  console.log(`| NAME: ${client.user.username}           |`);
  console.log("==========================\n\n==========================");
  client.user.setActivity(`v${packages.version}  |  ?help`, {
    type: "PLAYING"
  });
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  if (!message.content.startsWith(prefix)) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  let ops = {
    ownerID: "647630912795836437",
    active: active
  };

  const vip = [
    "647630912795836437",
    "676003241129017354",
    "363613544685502465",
    "604617640891121664"
  ];
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args, ops, vip);
});

client.login(token);
