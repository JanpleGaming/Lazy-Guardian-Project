const Discord = require("discord.js");

module.exports = {
    name: 'ping',
    description: 'Returns bot and API latency in milliseconds.',
    run: async(client ,message, args, guild) => {
   
      const msg = await message.channel.send(`🏓 Pinging....`);
      let pembed = new Discord.MessageEmbed()
      .setColor('#cfcfcf')
      .setTitle("🏓 Pong!")
      .setThumbnail(message.guild.iconURL())
      .addField("**📶 Latency:**", `${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms`)
      .addField("**💻 API:**", (`${Math.round(client.ws.ping)}ms`))
      .setTimestamp()
      .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
      
      msg.edit('', pembed).catch(console.error);;
    }
}