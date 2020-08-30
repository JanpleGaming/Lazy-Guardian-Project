module.exports = {
  name: "unmute",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("You don't hve the perms to do that");
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I don't have the perms to do that");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Mention the individual you would like to unmute");
    }

    let muterole = message.guild.roles.cache.find(x => x.name == "Muted");

    if (user.roles.cache.has(muterole)) {
      return message.channel.send("That user isn't muted!");
    }

    user.roles.remove(muterole)

    await message.channel.send(`**${message.mentions.users.first().username}** has been unmuted`);

    user.send(`You were muted in: **${message.guild.name}**`);
    
    message.delete()
  }
};