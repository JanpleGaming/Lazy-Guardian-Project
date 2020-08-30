const Discord = require("discord.js");
module.exports= {
  name: 'kick',
  category: 'Moderation',
  description: 'Kicks members',
  usage: 'kick [user] [reason]',
  run: async(client, message, args, guild) => {
    message.delete();

    let kicked = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
    let ok = new Discord.MessageEmbed()

    if (message.author === kicked) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(ok.setDescription(`:x: | You can\'t kick yourself, dummy!`))
        .setColor("#cfcfcf")
      message.channel.send(sanctionyourselfembed).then(m => m.delete({timeout: 10000}));
  
      return;
    }
  
    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`Enter a reason!`)
        .setColor("#cfcfcf");
      message.channel.send(noreasonembed).then(m => m.delete({timeout: 10000}));
  
      return;
    }
  
    if (!message.member.permissions.has("KICK_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription('HAHA YOU ACTUALLY THOUGHT! You aren\'t supposed to have access to this command unless you have the \'\'\'KICK MEMBERS\'\'\' perm. If you\'re supposed to have access to this command, please contact an administrator.')
        .setColor("#cfcfcf");
      message.channel.send(nopermsembed).then(m => m.delete({timeout: 60000}));
  
      return;
    }
  
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "I do not have the \`\`\`KICK MEMBERS\`\`\` permission. Please contact an administrator!"
        )
        .setColor("#cfcfcf");
      message.channel.send(botnopermsembed).then(m => m.delete({timeout: 10000}));
  
      return;
    }
  
    message.guild.member(kicked).kick(reason);
  
    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`${kicked.tag} has been successfully kicked. \n**Reason:** ${reason}`)
      .setColor("#cfcfcf");
  
    message.channel.send(successfullyembed);

  }
}