const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "utilities",
  description: "Shows you the many commands involved with the Utilities category",
  run: async (client, message, args) => {

  let utilities = new MessageEmbed()

    .setColor('PURPLE')
    .setTitle(':wrench: | Utilities - 1')
    .setDescription('\`\`eval(ONLY THE BOT OWNER HAS ACCESS)\`\`')
	  .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
    
  message.channel.send(utilities).catch(console.error);
  }
}