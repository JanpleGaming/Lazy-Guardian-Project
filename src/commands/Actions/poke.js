const { MessageEmbed } = require("discord.js")
const pic = require('nekos.life')
const neko = new pic()

module.exports = {
        name: "poke",
        description: "Poke someone!",
        usage: "poke @user",
        category: "action",
        run: async(client, message, args) => {

        if (message.mentions.members.size === 0) {
            const GIF = await neko.sfw.poke();
            const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(`${message.author.tag} poked themselves. A lonely word, it is.`)
            .setImage("https://media1.tenor.com/images/66fa8b15323d4d07faa8ae2f545ccfa3/tenor.gif?itemid=14054049")
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
            message.channel.send(embed);

            } else {

            const member = message.mentions.members.first();
            const GIF = await neko.sfw.poke();
            const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.tag} poked ${member.user.tag}`)
            .setImage(GIF.url)
            .setTimestamp()
            .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
            message.channel.send(embed);
            }
        }
}