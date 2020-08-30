const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "maid",
  category: "nsfw",
  description: "Get some beautiful maids!",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | This channel doesn\'t support NSFW content!')
      return message.reply(embed)

    } else {
    
    let maid = new Discord.MessageEmbed()
    .setTitle('A maid to accompany you, perhaps?')
    .setFooter(`${message.author.tag}`,message.author.avatarURL({ dynamic: true, size: 512 }))
    .setColor("RANDOM")
    .setImage(akaneko.nsfw.maid());
    return message.channel.send(maid);
      
    }
  }
}