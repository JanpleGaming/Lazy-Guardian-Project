const { MessageEmbed } = require("discord.js")
const pic = require('nekos.life')
const neko = new pic()

module.exports = {
        name: "smug",
        description: "Smut at someone!",
        usage: "smug @user",
        category: "action",
        run: async(client, message, args) => {

        if (message.mentions.members.size === 0) {
            const GIF = await neko.sfw.smug();
            const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(`${message.author.tag} smugged!`)
            .setImage(GIF.url)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
            message.channel.send(embed);

            } else {

            const member = message.mentions.members.first();
            const GIF = await neko.sfw.smug();
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.tag} smugged at ${member.tag}`)
            .setImage(GIF.url)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
            message.channel.send(embed);
            }
        }
}