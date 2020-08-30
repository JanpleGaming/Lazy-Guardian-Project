const Discord = require("discord.js");
const fs = require("graceful-fs");
const ytdl = require("ytdl-core"),
    ytpl = require("ytpl"),
    ytsearch = require("yt-search"),
    { Util } = require("discord.js");

module.exports = {
    name: "lofi",
    description: "Plays the 24/7 lo-fi playlist",
    state: "gamma",
};

module.exports.run = async(client, message, args, options) => {
    const voiceChannel = message.member.voice.channel;
    if (!message.member.voice.channel) return message.channel.send("You are not in a voice channel.")


    var url = "https://www.youtube.com/watch?v=5qap5aO4i9A"
    var video = await ytdl.getBasicInfo(url)
    return await queueSong(video, message, message.member.voice.channel, client)
}



async function queueSong(video, message, voiceChannel, client) {

    const serverQueue = client.queue.get(message.guild.id)
    let thumbnail = ""
    if (video.player_response) thumbnail = (video.player_response.videoDetails.thumbnail.thumbnails).slice(-1)[0]["url"];
    if (video.thumbnail) thumbnail = video.thumbnail;
    const song = {
        id: video.id || video.video_id,
        title: Util.escapeMarkdown(video.title),
        url: "https://www.youtube.com/watch?v=" + (video.id || video.video_url),
        thumbnail: thumbnail
    }
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel,
            connection: null,
            songs: [song],
            volume: 50,
            playing: true
        }
        try {
            const connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            client.queue.set(message.guild.id, queueConstruct)
            playSong(message.guild, queueConstruct.songs[0], message, client)
        } catch (e) {
            console.log(e)
            message.channel.send("An unknown error occoured upon trying to join the voice channel!")
            return queue.delete(message.guild.id)
        }
    } else serverQueue.songs.push(song);
    return;
}
async function playSong(guild, song, message, client) {



    const serverQueue = client.queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        client.queue.delete(guild.id);
        return;
    }
    serverQueue.connection.play(ytdl(song.id))
        .once('finish', reason => {
            serverQueue.songs.shift();
            playSong(guild, serverQueue.songs[0], message, client)
        })
        .on("error", console.error)
        .setVolumeLogarithmic(serverQueue.volume / 250)
    serverQueue.textChannel.send(`Now playing ${song.title}`)
}
const ytsr = (url) => new Promise((resolve, reject) => ytsearch(url, (err, r) => err ? reject(err) : resolve(r)))