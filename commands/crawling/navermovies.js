const express = require("express");
const router = express.Router();
const { RichEmbed } = require("discord.js");

const cheerio = require("cheerio");
const request = require("request");
const Iconv = require("iconv").Iconv;
const iconv = new Iconv("CP949", "utf-8//translit//ignore");

module.exports = {
  name: "navermovies",
  category: "crawling",
  run: async (client, message, args) => {
    var url = "http://movie.naver.com/movie/sdb/rank/rmovie.nhn";

    const embed = new RichEmbed()
      .setTitle("Movies Ranking")
      .setColor("29ffed")
      .setTimestamp()
      .setFooter(message.author.tag, message.author.displayAvatarURL);

    request({ url, encoding: null }, function(error, response, body) {
      let htmlDoc = iconv.convert(body).toString();
      let resultArr = [];

      const $ = cheerio.load(htmlDoc);
      let colArr = $(".tit3");
      for (var i = 0; i < 10; i++) {
        resultArr.push(colArr[i].children[1].attribs.title);

        console.log(resultArr);
        embed.addField(`${i + 1}위`, `${colArr[i].children[1].attribs.title}`);
        embed.setFooter(`Naver Movies`);
      }
      message.channel.send(embed);
    });

    module.exports = router;
  }
};
