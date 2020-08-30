const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "info",
  description: "Shows you the many commands involved with the Info category",
  run: async (client, message, args) => {

  let info = new MessageEmbed()

    .setColor('ORANGE')
    .setTitle(':exclamation: | Info - 11')
    .setDescription('\`\`about\`\` -Tells you about the owner and the bot\n\`\`avatar\`\` - Gives you a usrs avatar in .png format\n\`\`botinfo\`\` - Displays the bots current information\n\`\`channel\`\` - Displays the information attached to a mentioned channel\n\`\`credits\`\` - Gives you the credits to those of which helped create the bot\n\`\`help\`\` - A very useful command indeed\n\`\`imdb\`\` - Displays information about any given movie\n\`\`invite\`\` - Gives you the bots invite so you can invite the bot into your own server!\n\`\`ping\`\` - Gollects the current Bot and User ping in one go\n\`\`serverinfo\`\` - Displays information about the server\n\`\`weather\`\` - A useful command for collecting weather inf in a location\n\`\`whois\`\` - A very useful command indeed')
	  .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
    
  message.channel.send(info).catch(console.error);
  }
}