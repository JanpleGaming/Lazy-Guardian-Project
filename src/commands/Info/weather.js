const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = {
  name: "weather",
  description: "Get the weather a given location",
  category: "info",
  usage: "weather <location>",
  run: async(client, message, args) => {
    if(!args.length) {
      let specify = new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(':x: | Please specify a given location!')
      return message.channel.send(specify)
    }

 weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
try {

let temp = result[0].current.temperature;

let embed = new Discord.MessageEmbed()
.setTitle(`Weather - ${result[0].location.name}`)
.addField("Temperature", `${result[0].current.temperature} Fahrenheit`, true)
.addField("Sky", result[0].current.skytext, true)
.addField("Humidity", result[0].current.humidity, true)
.addField("Wind Speed", result[0].current.windspeed, true)
.addField("Observation Time", result[0].current.observationtime, true)
.addField("Wind Display", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);

if(temp >= 80) {
  embed.setColor(0xFF6700)
} else if(temp >= 60 && temp <= 79) {
  embed.setColor(0xADFF2F)
} else {
  embed.setColor(0x00FFFF)
}
message.channel.send(embed)

} catch(err) {
  let error = new MessageEmbed()
  return message.channel.send(error.setColor('RED').setTitle(':x: | Unable to fetch the weather info of that location!'))
}
 });
  }
}