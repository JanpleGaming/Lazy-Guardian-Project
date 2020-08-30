const { MessageEmbed } = require("discord.js")
const pic = require('nekos.life')
const neko = new pic()

module.exports = {
        name: "waifu",
        description: "Get a waifu!",
        usage: "waifu",
        category: "action",
        run: async(client, message, args) => {

            const GIF = await neko.sfw.waifu();
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Here's the waifu you requested!`)
            .setImage(GIF.url)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
            message.channel.send(embed);
            }
    }