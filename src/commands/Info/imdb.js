const Discord = require("discord.js");
const imdb = require("imdb-api");

module.exports = {
name: "imdb",
  description: "Get the information about series and movie",
  category: "info",
  usage: "imdb <name>",
  run: async (client, message, args, color) => {
    
    if(!args.length) {
      let embed1 = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | Please provid the name of a movie or series!')
      return message.channel.send(embed1)
    }
    
    const imob = new imdb.Client({apiKey: "5e36f0db"})
    
    let movie = await imob.get({'name': args.join(" ")})

    let embed2 = new Discord.MessageEmbed()
    .setTitle(movie.title)
    .setColor("RANDOM")
    .setThumbnail(movie.poster)
    .setDescription(movie.plot)
    .setFooter(`Ratings: ${movie.rating}`)
    .addField("Country", movie.country, true)
    .addField("Languages", movie.languages, true)
    .addField("Type", movie.type, true);
    
    message.channel.send(embed2).catch(console.error)
  }
}