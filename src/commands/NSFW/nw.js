const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "nsfwwallpapers",
  aliases: ["nw", "nsfwwallpapers", "nsfwwall"],
  category: "nsfw",
  description: "Get some NSFW Mobile Wallpapers!",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | This channel doesn\'t support NSFW content!')
      return message.reply(embed)

    } else {
    
    let nm = new Discord.MessageEmbed()
    .setTitle('Yes siiiir, NSFW Wallpapers!')
    .setFooter(`${message.author.tag}`,message.author.avatarURL({ dynamic: true, size: 512 }))
    .setColor("RANDOM")
    .setImage(akaneko.nsfw.wallpapers());
    return message.channel.send(nm);
      
    }
  }
}