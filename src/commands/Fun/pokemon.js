const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "pokemon",
  description: "Get any pokemon description",
  category: "info",
  usage: "pokemon <name>",
  run (client, message, args) {

const options = {
  url: `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${args.join(" ")}`,
  json: true
}

let embed1 = new MessageEmbed()

message.channel.send(embed1.setTitle(`:baseball: | Fetching Information for the Pokemon`).setColor('YELLOW')).then(msg => {
  get(options).then(body => {
    
    let embed2 = new MessageEmbed()
    .setAuthor(body.name, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.typeIcon}`)
    .setDescription(`This type of pokemon is **${body.info.type}!**. ${body.info.description}`)
    .setThumbnail(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.photo}`)
    .setColor("RANDOM")
    .setFooter(`Weakness of pokemon - ${body.info.weakness}`, `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${body.images.weaknessIcon}`)
    
    message.channel.send(embed2)
    msg.delete()
  })
})
  } 
}