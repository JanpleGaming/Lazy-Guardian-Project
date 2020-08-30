const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "economy",
  description: "Shows you the many commands involved with the economy category",
  run: async (client, message, args) => {

  let economy = new MessageEmbed()

    .setColor('YELLOW')
    .setTitle(':moneybag: | Economy - 0')
    .setDescription('\`\`Coming Soon!\`\`')
	  .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
    
  message.channel.send(economy).catch(console.error);
  }
}