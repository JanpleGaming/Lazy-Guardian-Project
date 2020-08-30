const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "doujin",
  category: "nsfw",
  description: "Get some succulent doujins!",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | This channel doesn\'t support NSFW content!')
      return message.reply(embed)
      
    } else {
    
    let doujin = new Discord.MessageEmbed()
    .setTitle('Enjoy your doujin you sad and horny fuck!')
    .setFooter(`${message.author.tag}`,message.author.avatarURL({ dynamic: true, size: 512 }))
    .setColor("RANDOM")
    .setImage(akaneko.nsfw.doujin());
    return message.channel.send(doujin);
      
    }
  }
}