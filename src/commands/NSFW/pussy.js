const { MessageEmbed } = require("discord.js")
const pic = require('nekos.life')
const neko = new pic()

module.exports = {
        name: "pussy",
        description: "Brings up some pics of pussies!!",
        category: "action",
        run: async(client, message, args) => {

      if(!message.channel.nsfw) {
      let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | This channel doesn\'t support NSFW content!')
      return message.reply(embed)
    } else {

            const GIF = await neko.nsfw.pussy();
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Some succulent pussy, as requested`)
            .setImage(GIF.url)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
            message.channel.send(embed);
            }
        }
    }