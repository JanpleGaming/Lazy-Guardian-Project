const Discord = require('discord.js')

module.exports = {
  name: "purge",
  aliases:["clear", "purge"],
  category: "moderation",
  description: "Purge any deletable message up to 100 per command!",
  run: async (client, message, args) => {
    
            
    if (message.deletable) {
        message.delete();
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
      let missingU = new Discord.MessageEmbed()

      .setColor('RED')
      .setDescription('**:x: | You\'re missing the \'\'MANAGE_MESSAGES\'\' perm!!**')

        return message.reply(missingU).then(m => m.delete(10000));
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
      
      let notNum = new Discord.MessageEmbed()

      .setColor('RED')
      .setDescription('**:x: | That\'s not a number!**')

        return message.reply(notNum).then(m => m.delete(10000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 1000) {
        deleteAmount = 1000;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    let embed = new Discord.MessageEmbed()

    message.channel.bulkDelete(deleteAmount, true).then(messages => message.channel.send(
      embed.setDescription(`**:white_check_mark: | ${deleteAmount} Messages Purged Successfully!**`).setColor('GREEN')
      )).then(m => m.delete({timeout: 30000})).catch(console.error);
  }
}