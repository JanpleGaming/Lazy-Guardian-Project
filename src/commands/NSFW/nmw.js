const Discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "nsfwwallpapers",
  aliases: ["nmw", "nsfwmobilewallpapers", "nsfwmwall"],
  category: "nsfw",
  description: "Get some NSFW Mobile Wallpapers!",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      let embed = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | This channel doesn\'t support NSFW content!')
      return message.reply(embed)

    } else {
    
    let nmw = new Discord.MessageEmbed()
    .setTitle('Yes siiiir, mobile NSFW Wallpapers!')
    .setFooter(`${message.author.tag}`,message.author.avatarURL({ dynamic: true, size: 512 }))
    .setColor("RANDOM")
    .setImage(akaneko.nsfw.mobileWallpapers());
    return message.channel.send(nmw);
      
    }
  }
}