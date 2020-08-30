const { MessageEmbed } = require("discord.js")
const pic = require('nekos.life')
const neko = new pic()

module.exports = {
        name: "slap",
        description: "Slap someone!",
        usage: "slap @user",
        category: "action",
        run: async(client, message, args) => {

        if (message.mentions.members.size === 0) {
            const GIF = await neko.sfw.slap();
            const embed = new MessageEmbed()
            .setColor('RED')
            .setTitle(`${message.author.tag} slapped themselves. That must hurt!`)
            .setImage("https://media1.tenor.com/images/66fa8b15323d4d07faa8ae2f545ccfa3/tenor.gif?itemid=14054049")
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
            message.channel.send(embed);

            } else {

            const member = message.mentions.members.first();
            const GIF = await neko.sfw.slap();
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.tag} slapped ${member.user.tag}`)
            .setImage(GIF.url)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
            message.channel.send(embed);
            }
        }
}