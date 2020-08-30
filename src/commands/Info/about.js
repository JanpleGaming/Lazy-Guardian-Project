const Discord = require('discord.js');
module.exports = {
    name: 'about',
    description: 'Shows a lot of information regarding the bot and the bot\'s owner!'
}

module.exports.run = async (client, message, args) => {
  
	const embed = new Discord.MessageEmbed()
	.setColor('#cfcfcf')
	.addField('General', `**${client.user.username}** was first created on June 17th, 2020 as an experimental bot utilizing Python but even so, sooner or later the creator of this bot, Matthew, decided to move onto utilizing javascript since it was, in his opinion, more facile to utilize, more reliable, and efficient. **${client.user.username}** has 14 commands in total upon inditing this command.`)
	.addField(`More`, `**${client.user.username}** utilizes a database kenned as Mongoose Atlas! Mongoose is an authentically reliable, expeditious, and facile way to store information into a database like, for example, per server prefixes, economy, the guilds ID, etc.`)
	.addField(`About The Owner`, `The owner of **${client.user.username}** is assuredly wanting to shape this discord bot into an all purpose, multifunctional implement for servers ranging from mitigation to music and even advertisement! He knows of the difficulties that will be bestowed upon him and of the many obstacles he'll have to surmount in order to do so, but, as an optimistic pessimist, he believes that no such things are too arduous and nothing is ever authentically unaccomplishable, even though all things can fail.`)
	.addField(`More`, `His one true and only dream may seem akin to something out of a fantasy novel, and it authentically does, but his only wish is to create a multipurpose business that would commence off and assuredly evolve around technology, hoping that one day his influence would reach around the globe and perhaps even transmute the world in the process. That may seem ridiculous and infeasible but I assure you, he is not jesting about that. Once his sights are set on something, he will not stop until he has prospered in doing so. That being said, he is a very intelligent man (even though, if you ken him personally, at times it may not seem like to it) and he will find a way one way or another.`)
  .addField('Support Server', "[Click Me](https://discord.io/TheLoungingArea)")
	.setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
		message.channel.send(embed).catch(console.error);
	}