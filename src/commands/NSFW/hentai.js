const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "hentai",
  category: "nsfw",
  description: "Provides you with common hentai!",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | This channel doesn\'t support NSFW content!')
      return message.reply(embed)
      
    } else {
    
    let hentai = new Discord.MessageEmbed()
    .setTitle('You hentai addict, lmfao')
    .setFooter(`${message.author.tag}`,message.author.avatarURL({ dynamic: true, size: 512 }))
    .setColor("RANDOM")
    .setImage(akaneko.nsfw.hentai());
    return message.channel.send(hentai);
      
    }
  }
}