const Discord = require('discord.js');

module.exports = {
  name: "8ball",
  category: "fun",
  description: "Ask a question and receive an answer",
  run: async (client, message, args) => {       
        
  let reason = args.join(' ');
  let yes = new Discord.MessageEmbed()
  if (reason.length < 1) return message.channel.send(yes.setDescription(':x: | It seems as if you forgot to ask a question').setColor('RED'));
  var ball = ['It is certain.', 'No doubt about it.', 'No chance.', 'Maybe, time will tell.', 'No way.',' Concentrate and try again.', ' As I see it, yes', 'Outlook good', 'Most likely', 'Better not tell you now', 'My sources say no', 'Signs point to yes', 'Yes definitely', 'It is decidedly so', 'As I see it, yes', 'Outlook not so good', 'Very doubtful'];

  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .addField("You asked", reason)
  .addField("8ball says", ball[Math.floor(Math.random () * ball.length)])
  .setThumbnail("http://www.pngmart.com/files/3/8-Ball-Pool-Transparent-PNG.png")
  message.channel.send(embed);
  }
}