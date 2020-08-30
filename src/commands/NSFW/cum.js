const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "cum",
  category: "nsfw",
  description: "Deliver a load to that one slut",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | This channel doesn\'t support NSFW content!')
      return message.reply(embed)
    } else {
    
    let cum = new Discord.MessageEmbed()
    .setTitle(`${message.author.tag} is cumming!`)
    .setFooter(`${message.author.tag}`,message.author.avatarURL({ dynamic: true, size: 512 }))
    .setColor("RANDOM")
    .setImage(akaneko.nsfw.cum());
    return message.channel.send(cum);
      
    }
  }
}