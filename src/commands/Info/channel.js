const Discord = require('discord.js');

const channelTypes = {
    dm: 'DM',
    group: 'Group DM',
    text: 'Text Channel',
    voice: 'Voice Channel',
    category: 'Category',
    unknown: 'Unknown',
};
module.exports = {
    name: 'channel',
    description: 'provides detailed information about a particular channel in the guild',
    usage: 'channel [channel name | optional]',
}

module.exports.run = async (client, message, args) => {

  const channel = message.channel || message.guild.text.channels.cache.find(args[0]);

  if (!channel) {
      return message.reply('please enter a valid channel.');
  }
       
  const channelEmbed = new Discord.MessageEmbed()
          .setColor("#cfcfcf")
          .setThumbnail(message.guild.iconURL({ dynamic: true, size: 512 }))
          .setTitle('Channel Info')
          .addField(':arrow_right: Name', channel.type === 'dm' ? `<@${channel.recipient.username}>` : channel.name, true)
          .addField(':arrow_right: ID', channel.id, true)
          .addField(':arrow_right: Creation Date', channel.createdAt.toDateString(), true)
          .addField(':arrow_right: NSFW', channel.nsfw ? 'True' : 'False', true)
          .addField(':arrow_right: Category', channel.parent ? channel.parent.name : 'None', true)
          .addField(':arrow_right: Type', channelTypes[channel.type], true)
          .addField(':arrow_right: Topic', channel.topic || 'None', true);

  message.channel.send(channelEmbed).catch(console.error);;
};