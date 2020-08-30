const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "lewdbomb",
  aliases: ["lbomb"],
  category: "nsfw",
  description: "Like the command lewdneko, but more!",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | This channel doesn\'t support NSFW content!')
      return message.reply(embed)

    } else {

    return message.channel.send(message.channel.send(akaneko.lewdBomb(5)));
      
    }
  }
}