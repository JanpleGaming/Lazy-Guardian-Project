const { MessageEmbed } = require("discord.js")
const pic = require('nekos.life')
const neko = new pic()

module.exports = {
        name: "lesbian",
        description: "Have lesbian sex with somebody! :wink:",
        usage: "lesbian @user",
        category: "action",
        run: async(client, message, args) => {

        if(!message.channel.nsfw) {
        let embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(':x: | This channel doesn\'t support NSFW content!')
        return message.reply(embed)
      } else {

        if (message.mentions.members.size === 0) {
            const GIF = await neko.nsfw.lesbian();
            const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(`${message.author.tag} had lesiabn sex by themselves???`)
            .setImage(GIF.url)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
            message.channel.send(embed);
            }
            const member = message.mentions.members.first();
            const GIF = await neko.nsfw.lesbian();
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.tag} had lesbian sex with ${member.user.tag}!`)
            .setImage(GIF.url)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
            message.channel.send(embed);
            }
        }
    }