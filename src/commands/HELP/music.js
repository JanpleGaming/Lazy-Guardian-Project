const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "music",
  description: "Shows you the many commands involved with the Music category",
  run: async (client, message, args) => {

  let music = new MessageEmbed()

    .setColor('YELLOW')
    .setTitle(':musical_note: | Music - 0')
    .setDescription('\`\`Coming soon!\`\`')
	  .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))

  message.channel.send(music).catch(console.error);
  }
}