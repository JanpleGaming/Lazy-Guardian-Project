const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "fun",
  description: "Shows you the many commands involved with the Fun category",
  run: async (client, message, args) => {

  let fun = new MessageEmbed()

    .setColor('ORANGE')
    .setTitle(':tada: | Fun - 9')
    .setDescription('\`\`8ball\`\` - Ask the magic ball a question about yor future!\n\`\`advice\`\` - Gives you a lil piece of advice!\n\`\`ascii\`\` - Transforms your text(up to 20 characters) into an ascii format!\n\`\`fact\`\` - Tells you bizzare facts!\n\`\`joke\`\` - Tells you jokes!\n\`\`math\`\` - To make life easier, resort to this useful math command!\n\`\`meme\`\` - Sends you hilarious memes!\n\`\`pokemon\`\` - Use this Plus a pokemons name to acquire simplistic information about said pokemon!\n\`\`urban\`\` - The good ol wonderful urban dictionary command!')
	  .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
    
  message.channel.send(fun).catch(console.error);
  }
}