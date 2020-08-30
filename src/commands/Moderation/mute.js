const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mute",
  description: "mute someone",
  catagory: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      let mute = new MessageEmbed()
      .setColor('RED')
      .setDescription(':x: | Sorry but you haven\'t the right perms to mute some')
      return message.channel.send(mute);
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      let me = new MessageEmbed()
      .setColor('RED'
      .setDescription(':x: | For some reason, it appears as if *i* don\'t have the right perms to do this.'))
      return message.channel.send(me);
    }

    const user = message.mentions.members.first();

    if (!user) {
      let mention = new MessageEmbed()
      .setColor('RED')
      .setDescription(':x: | Please mention the user you would like to mute!')
      return message.channel.send(mention);
    }

    if (user.id === message.author.id) {
      let self = new MessageEmbed()
      .setColor('RED')
      .setDescription(':x: | You can\'t mute yourself!')
      return message.channel.send(self);
    }
    let reason = args.slice(1).join("");

    if (!reason) {
      let reason = new MessageEmbed()
      .setColor('RED')
      .setDescription(':x: | You must provide a reason as well!')
      return message.channel.send(reason);
    }

    const vrole = user.roles.cache

    let muterole = message.guild.roles.cache.find(x => x.name == "muted");

    if (!muterole) {
      let muteR = new MessageEmbed()
      .setColor('RED')
      .setDescription(':x: | There is no mute role in this server!')
      return message.channel.send(muteR);
    }
    
    await user.roles.remove(vrole);
    await user.roles.add(muterole);

    await message.channel.send(
      `User Muted: ${message.mentions.users.first().username}
      Reason: ${reason}`
    );

    user.send(`You got muted in ${message.guild} for ${reason}`
    );
  }
};