const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "nsfw",
  description: "Shows you the many commands involved with the NSFW category",
  run: async (client, message, args) => {

  let nsfw = new MessageEmbed()

    .setColor('ORANGE')
    .setTitle(':underage: | NSFW - 13')
    .setDescription('\`\`anal\`\` - owo so kinky. Butt sex uwu\n\`\`ass\`\` - Sends pics of anime ass!\n\`\`bdsm\`\` - For those who like it rough with leather!\n\`\`cum\`\` - OwO Cum\n\`\`doujin\`\` - Pretty much just hentai comics!\n\`\`femdom\`\` - OwO watch them females dominate them male\n\`\`hentai\`\` - Good ol hentai!\n\`\`lewdbomb\`\` - Like lewdneko but with 5x more nekos!\n\`\`lewdneko\`\` - Sends lewd nekos!\n\`\`maid\`\` - Kinky maids uwu\n\`\`nmw\`\` - NSFW Wallpapers for mobile\n\`\`nw\`\` - NSFW Wallpapers for laptop and pc!`\n\`\`orgy\`\` - Use this command to experience the life of orgy!\n\`\`pussy\`\` - Sends pussy picks!')
	  .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
    
  message.channel.send(nsfw).catch(console.error);
  }
}