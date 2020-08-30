const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "lewdneko",
  aliases: ["ln"],
  category: "nsfw",
  description: "Sends 5 lewd images instead of 1!",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | This channel doesn\'t support NSFW content!')
      return message.reply(embed)
    } else {
    
    let lewdneko = new Discord.MessageEmbed()
    .setTitle('Always liked a bit of lewdness myself')
    .setFooter(`${message.author.tag}`,message.author.avatarURL({ dynamic: true, size: 512 }))
    .setColor("RANDOM")
    .setImage(akaneko.lewdneko());
    return message.channel.send(lewdneko);
      
    }
  }
}