const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'credits',
    description: 'The peeps who helped make the bot',
    aliases: ['creds'],
}

module.exports.run = async (client, message) => {

  const embed = new MessageEmbed()
    .setColor('#cfcfcf')
    .setTitle("Credits")
    .setThumbnail(client.user.avatarURL({ dynamic: true, size: 512 }))

    .addField('Wintercearig', `\`\`\`\"This bot kewl\"\`\`\``)

    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }));
   message.channel.send(embed).catch(console.error);;
}