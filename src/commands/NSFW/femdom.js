const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "femdom",
  aliases: ['fd'],
  category: "nsfw",
  description: "Get some beautiful femdoms!",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | This channel doesn\'t support NSFW content!')
      return message.reply(embed)
      
    } else {
    
    let femdom = new Discord.MessageEmbed()
    .setTitle('I hope you like the femdom I brought you!')
    .setFooter(`${message.author.tag}`,message.author.avatarURL({ dynamic: true, size: 512 }))
    .setColor("RANDOM")
    .setImage(akaneko.nsfw.femdom());
    return message.channel.send(femdom);
      
    }
  }
}