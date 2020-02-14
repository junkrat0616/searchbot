const cheerio = require("cheerio");
const request = require("request");
const Discord = require("discord.js");

module.exports = {
  name: "melon",
  aliases: ["melonchart"],
  run: async (client, message, args) => {
    var url = "http://www.melon.com/chart/";
    var title = new Array(),
      artist = new Array(),
      up_date,
      up_time;
    var rank = 10; //10위까지 확인

    request(url, function(error, response, html) {
      if (!error) {
        var $ = cheerio.load(html);

        // 곡명 파싱
        for (var i = 0; i < rank; i++) {
          $(".ellipsis.rank01 > span > a").each(function() {
            var title_info = $(this);
            var title_info_text = title_info.text();
            title[i] = title_info_text;
            i++;
          });
        }

        // 아티스트명 파싱
        for (var i = 0; i < rank; i++) {
          $(".checkEllipsis").each(function() {
            var artist_info = $(this);
            var artist_info_text = artist_info.text();
            artist[i] = artist_info_text;
            i++;
          });
        }
        $(".year").each(function() {
          var date_info = $(this);
          var date_info_text = date_info.text();
          up_date = date_info_text;
        });

        // 업데이트 시간
        $(".hhmm > span").each(function() {
          var time_info = $(this);
          var time_info_text = time_info.text();
          up_time = time_info_text;
        });

        //xxxx년 xx월 xx일 오후/오전 xx시 format
        var up_date_arr = new Array();
        var up_date_arr = up_date.split(".");
        var up_time_arr = new Array();
        var up_time_arr = up_time.split(":");
        var newtime;

        let resp = "";

        // 순위 제목 - 아티스트명
        for (var i = 1; i < rank + 1; i++) {
          resp += `**${i}위**. **${title[i - 1]}** - ${artist[i - 1]}\n`;
        }

        const embed = new Discord.RichEmbed()
          .setAuthor(
            "Melon",
            "https://lh3.googleusercontent.com/GweSpOJ7p8RZ0lzMDr7sU0x5EtvbsAubkVjLY-chdyV6exnSUfl99Am0g8X0w_a2Qo4"
          )
          //멜론 차트 1위 ~ 10위
          .setTitle(`멜론 차트 <1위 ~ ${rank}위>`)
          .setDescription(resp)
          .setColor("29ffed")
          .setFooter(message.author.tag, message.author.displayAvatarURL)
          .setTimestamp();
        message.channel.send(embed);
      }
    });
  }
};
