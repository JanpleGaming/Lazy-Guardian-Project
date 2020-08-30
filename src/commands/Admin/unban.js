const { MessageEmbed } = require('discord.js');

module.exports = {
name: "unban",
  category: 'Moderation',
  description: 'Unban someone from your guild. Must provide a reason!',
  usage: `unban <client id or tag>`,
  run: async(client ,message, args, guild) => {
    message.delete();

  let unbanned = message.mentions.users.first() || client.users.resolve(args[0]);
  let reason = args.slice(1).join(" ");

    if (!message.member.hasPermission("BAN_MEMBERS")) {
    let userPerms = new MessageEmbed()
      .setDescription('It appears as if you don\'t have the ```BAN MEMBERS``` perm!')
      .setColor('#cfcfcf')
    message.channel.send(userPerms).then(m => m.delete({timeout: 10000}));
      return;
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
    let botPerms = new MessageEmbed()
      .setDescription('It seems as if I don\'t have the \`\`BAN MEMBERS\`\` perm. Fix that please!')
      .setColord('#cfcfcf')
    message.channel.send(botPerms).then(m => m.delete({timeout: 10000}));
      return;
    }

    if (!unbanned) {
    let unbaninfoembed = new MessageEmbed()
      .setTitle("Command: Unban")
      .setDescription(
        `**Description:** Unbans a member\n` +
          "**Usage:** unban [user] (reason) \n" +
          "**Example:** unban 597253939469221891 Appealed"
      )
      .setColor("#cfcfcf");
    message.channel.send(unbaninfoembed).then(m => m.delete({timeout: 10000}));
      return;
    }

    if (!args[0]) {
    let  args = new MessageEmbed()
      .setDescription('You need to provide the ID of the user you would like to unban!')
      .setColor('#cfcfcf')
    message.channel.send(args).then(m => m.delete({timeout: 10000}));
      return;
    }

    if (!reason) {
    let noreasonembed = new Discord.MessageEmbed()
      .setDescription(`You must enter a reason!`)
      .setColor("#cfcfcf");
    message.channel.send(noreasonembed).then(m => m.delete({timeout: 10000}));
      return;
    }

    let bannedMemberInfo = await message.guild.fetchBans()
    let bannedMember;
    bannedMember = bannedMemberInfo.find(b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || bannedMemberInfo.get(args[0]);

    if (!bannedMember) {
    let banned = new MessageEmbed()
      .setDescription('That user isn\'t banned, silly!')
      .setColor('#cfcfcf')  
    message.channel.send(banned).then(m => m.delete({timeout: 10000}));
      return;
    }

        if (reason) {
            message.guild.members.unban(bannedMember.user.id, reason)
            var sembed = new MessageEmbed()
                .setColor('#cfcfcf')
                .setTitle(`Unbanned => ${bannedMember.user.tag}.\n**Reason:** ${reason}`)
            message.channel.send(sembed).then(m => m.delete({timeout: 10000}));
        }
  }
};