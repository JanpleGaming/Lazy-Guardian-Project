const { MessageEmbed } = require("discord.js")
const pic = require('nekos.life')
const neko = new pic()

module.exports = {
        name: "anal",
        description: "Give anal to someone :wink:",
        usage: "anal @user",
        category: "action",
        run: async(client, message, args) => {

        if(!message.channel.nsfw) {
        let embed = new MessageEmbed()
        .setColor('RED')
        .setTitle(':x: | This channel doesn\'t support NSFW content!')
        return message.reply(embed)
      } else {

        if (message.mentions.members.size === 0) {
            const GIF = await neko.nsfw.anal();
            const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(`${message.author.tag} gave anal to themselves. Now how the fuck is that even possible?`)
            .setImage(GIF.url)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
            message.channel.send(embed);
            }
            const member = message.mentions.members.first();
            const GIF = await neko.nsfw.anal();
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.tag} gave anal to ${member.user.username}`)
            .setImage(GIF.url)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
            message.channel.send(embed);
            }
        }
    }