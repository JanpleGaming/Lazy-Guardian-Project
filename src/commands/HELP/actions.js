const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "actions",
  description: "Shows you the many commands involved with the actions category",
  run: async (client, message, args) => {
        
  let actions = new MessageEmbed()

    .setColor('ORANGE')
    .setTitle(':fist: | Actions - 10')
    .setDescription('\`\`baka\`\` - When someone\'s annoying you, just say Baka!\n\`\`cuddle\`\` - Go ahead and cuddle someone!\n\`\`hug\`\` - When in doubt, hug it out!\n\`\`kiss\`\` - owo kisses\n\`\`pat\`\` - Pat pat!\n\`\`poke\`\` - Pokey Pokey!\n\`\`slap\`\` - *slap*\n\`\`smug\`\` - Hehe. Do a lil smug!\n\`\`tickle\`\` - Hehe! Tickle fight!\n\`\`waifu\`\` - Get yourself a couple of waifus, haha!')
	  .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))

  message.channel.send(actions).catch(console.error);
  }
}