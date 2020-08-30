const Discord = require("discord.js");
const fs = require("graceful-fs");
const ytdl = require("ytdl-core"),
    ytpl = require("ytpl"),
    ytsearch = require("yt-search"),
    { Util } = require("discord.js");

module.exports = {
  name: "nowplaying",
  aliases: ["np", "current", "song"],
  use: "queue",
  description: "View the current song.",
  state : "gamma",
}

module.exports.run = async (client, message, args) => { 
  const voiceChannel = message.member.voice.channel;
  if (!message.member.voice.channel) return message.channel.send("You are not in a voice channel.")

  const serverQueue = client.queue.get(message.guild.id)
  if (!serverQueue) return message.channel.send("`❌` I am not currently playing music.")
  
  var vl = ["○────", "─○───", "──○──", "───○─", "────○"];
  let volumeValue = (vl[(Math.round(serverQueue.volume / 20)) - 1])
  if (!volumeValue) volumeValue = "Lazy Guardian";

  let musicEmbed = new Discord.MessageEmbed()
    .setTitle("Music")
    .setThumbnail(serverQueue.songs[0].thumbnail)
    .setFooter(volumeValue, "https://cdn.glitch.com/967bdf25-e9cb-4a1f-bdb5-a102880988a9%2FMusic%20Icon.png")
    .setDescription(`ɴᴏᴡ ᴘʟᴀʏɪɴɢ \n **${serverQueue.songs[0].title}**`)
    .setColor(client.colors['RANDOM'])

  return message.channel.send(musicEmbed);}