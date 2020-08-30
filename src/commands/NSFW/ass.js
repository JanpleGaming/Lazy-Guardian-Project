const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "ass",
  category: "nsfw",
  description: "Get some sexy ass",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | This channel doesn\'t support NSFW content!')
      return message.reply(embed)
    } else {
    
    let ass = new Discord.MessageEmbed()
    .setTitle(`I hope you like the ass you were given!`)
    .setFooter(`${message.author.tag}`,message.author.avatarURL({ dynamic: true, size: 512 }))
    .setColor("RANDOM")
    .setImage(akaneko.nsfw.ass());
    return message.channel.send(ass);
      
    }
  }
}