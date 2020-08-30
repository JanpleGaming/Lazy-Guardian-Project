const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "bdsm",
  category: "nsfw",
  description: "Brings you some sexy bdsm",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | This channel doesn\'t support NSFW content!')
      return message.reply(embed)
    } else {
    
    let bdsm = new Discord.MessageEmbed()
    .setTitle(`You would, wouldn't you, you kinky fucker 😉`)
    .setFooter(`${message.author.tag}`,message.author.avatarURL({ dynamic: true, size: 512 }))
    .setColor("RANDOM")
    .setImage(akaneko.nsfw.bdsm());
    return message.channel.send(bdsm);
      
    }
  }
}