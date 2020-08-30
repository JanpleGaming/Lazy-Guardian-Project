const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "admin",
  description: "Shows you the many commands involved with the admin category",
  run: async (client, message, args, options) => {

  let admin = new MessageEmbed()

    .setColor('ORANGE')
    .setTitle(':police_officer: | Admin - 5')
    .setDescription('\`\`announce\`\` - Use this command to send an embed within any mentioned channel!\n\`\`ban\`\` - Use this to ban pesky rule breakers!\n\`\`giveaway\`\` - You should already know what this does. It gives stuff away!\n\`\`prefix\`\` - This changes the servers prefix, ofc\n\`\`unban\`\` - Use this command to unban users who have server their sentence')
	  .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
    
  message.channel.send(admin).catch(console.error);
  }
}