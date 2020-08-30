const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'invite',
    description: 'Provides the invite you can use to invite this bot to your own server!'
}

module.exports.run = async (client, message, args) => {
  
	const embed = new MessageEmbed()
	.setColor('#cfcfcf')
  .setDescription('To invite me to your server, click the link below\n[Click Me](https://rb.gy/e6dbz9){This is a test message!}')
	message.channel.send(embed).catch(console.error);
}