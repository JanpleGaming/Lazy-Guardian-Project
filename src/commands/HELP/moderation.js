const { MessageEmbed } = require('discord.js')

 module.exports = {
  name: "moderation",
  description: "Shows you the many commands involved with the Moderation category",
  run: async (client, message, args) => {

  let moderation = new MessageEmbed()

    .setColor('ORANGE')
    .setTitle(':warning: | Moderation - 6')
    .setDescription('\`\`kick\`\` - Used to kick users from the server\n\`\`lock\`\` - Used to lock the current channel\n\`\`mute\`\` - Used to mute rulebreakers\n\`\`purge\`\` - Used to purge chats (Max is 100 for now)\n\`\`unlock\`\` - Used to unlock the current channel\n\`\`unmute\`\` - Used to unmute users')
	  .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))

  message.channel.send(moderation).catch(console.error); 
  }
 }