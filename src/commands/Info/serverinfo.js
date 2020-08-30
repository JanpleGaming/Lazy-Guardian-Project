const Discord = require('discord.js');
const moment = require("moment");

module.exports = {
    name: 'serverinfo',
    aliases: ['servinfo'],
    description: 'Displays the servers information',
}

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

const verificationLevels = {
	NONE: 'None',
	LOW: 'Low',
	MEDIUM: 'Medium',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

const regions = {
	brazil: 'Brazil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydeny: 'Sydeny',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

module.exports.run = async (client, message) => {

const roles = message.guild.roles.cache
  .sort((a, b) => b.position - a.position)
  .map(role => role.toString())
  .slice(0, -1);

const members = message.guild.members.cache;
const channels = message.guild.channels.cache;
const emojis = message.guild.emojis.cache;

const server = new Discord.MessageEmbed() 

        .setTitle(`**Server information for __${message.guild.name}__**`)
        .setColor('#cfcfcf')

        .setThumbnail(message.guild.iconURL({ dynamic: true, size: 512 }))

        .addField('❮ General ❯', [
				`**❋ Name:** ${message.guild.name}`,
				`**❋ ID:** ${message.guild.id}`,
				`**❋ Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
				`**❋ Region:** ${regions[message.guild.region]}`,
				`**❋ Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : '0'}`,
				`**❋ Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,
				`**❋ Verification Level:** ${verificationLevels[message.guild.verificationLevel]}`,
				`**❋ Time Created:** ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).fromNow()}`,
				`\u200b`
			])

      .addField('❮ Presence ❯', [
				`**❋ Online:** ${members.filter(member => member.presence.status === 'online').size}`,
				`**❋ Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
				`**❋ Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
				`**❋ Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
				`\u200b`
			])

        .addField('❮ Statistics ❯', [
				`**❋ Role Count:** ${roles.length}`,
				`**❋ Emoji Count:** ${emojis.size}`,
				`**❋ Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
				`**❋ Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
				`**❋ Member Count:** ${message.guild.memberCount}`,
				`**❋ Humans:** ${members.filter(member => !member.user.bot).size}`,
				`**❋ Bots:** ${members.filter(member => member.user.bot).size}`,
				`**❋ Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
				`**❋ Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
				`**❋ Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
				`\u200b`
			])

        .setTimestamp() 
        .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
        
message.channel.send(server).catch(console.error);;
}