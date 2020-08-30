const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "orgy",
  category: "nsfw",
  description: "Orgy!",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | This channel doesn\'t support NSFW content!')
      return message.reply(embed)
    } else {
    
    let orgy = new Discord.MessageEmbed()
    .setTitle('Ngl, orgies are kinda hot')
    .setFooter(`${message.author.tag}`,message.author.avatarURL({ dynamic: true, size: 512 }))
    .setColor('RANDOM')
    .setImage(akaneko.nsfw.orgy());
    return message.channel.send(orgy);
      
    }
  }
}