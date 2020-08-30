const Discord = require("discord.js");

module.exports = {
  name: 'ban',
  category: 'Moderation',
  description: 'Bans the mentioned user. Must provide a reason!',
  usage: 'ban [user] [reason]',
  run: async(client, message, args, guild) => {
    message.delete();

    let banned = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
  
    // MESSAGES

      if (!message.member.permissions.has('BAN_MEMBERS')) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription('It seems as if you don\t have the \`\`BAN MEMBERS\`\` perm!')
        .setColor("#cfcfcf");
      message.channel.send(nopermsembed).then(m => m.delete({timeout: 30000})).catch(console.error);
      return;
    }

      if (!message.guild.me.permissions.has('BAN_MEMBERS')) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription('It seems as if I don\'t have the ```BAN MEMBERS``` perm. Fix that please!')
        .setColor("#cfcfcf");
      message.channel.send(botnopermsembed).then(m => m.delete({timeout: 30000})).catch(console.error);
  
      return;
    }

    if (!banned) {
      let baninfoembed = new Discord.MessageEmbed()
        .setTitle("Command: Ban")
        .setDescription(
          `**Description:** Bans a member\n` +
            "**Usage:** ban [user] (reason) \n" +
            "**Examples:**ban @Cricket Rule Breaking \n" +
            "**or**\n" +
            "ban 597253939469221891 Rule Breaking"
        )
        .setColor("#cfcfcf");
      message.channel.send(baninfoembed).then(m => m.delete({timeout: 30000})).catch(console.error);
  
      return;
    }
  
    if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
        .setDescription(`You can't ban yourself silly!`)
        .setColor("#cfcfcf");
      message.channel.send(sanctionyourselfembed).then(m => m.delete({timeout: 30000})).catch(console.error);
  
      return;
    }

    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`You must provide a reason!`)
        .setColor("#cfcfcf");
      message.channel.send(noreasonembed).then(m => m.delete({timeout: 30000})).catch(console.error);

      return;
    }
  
    message.guild.members.ban(banned, { reason: reason });

    let dmBan = new Discord.MessageEmbed()
    user.send(embed.setTitle('Ban').setColor('RED').setDescription(`**Banned by:** ${message.author.tag}`).setDescription(`**Reason:** ${reason}`)).catch(console.error);

    let successfullyembed = new Discord.MessageEmbed()
      .setTitle(`${banned.tag} has been successfully banned \n**Reason:** ${reason}`)
      .setColor("#cfcfcf");

    message.channel.send(successfullyembed).then(m => m.delete({timeout: 30000})).catch(console.error);
  }
}