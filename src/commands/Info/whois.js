const Discord = require("discord.js");
const moment = require("moment");

module.exports = {
    name: 'whois',
    aliases: ['wi', 'user'],
    category: 'Moderation',
    description: 'Displays a specified users information.',
    usage: `whois <users tag>`,
    run: async(client ,message, args, guild) => {

const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

  const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do not Disturb",
    offline: "Offline"
  }

  let member = message.mentions.members.last() || message.member;
  
		const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);
		const userFlags = member.user.flags.toArray();

    function game() {
      let game;
      if (member.presence.activities.length >= 1) game = `${member.presence.activities[0].type} ${member.presence.activities[0].name}`;
      else if (member.presence.activities.length < 1) game = "None";
      return game;
    }

  let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
  let joined = Math.floor(y / 86400000);
  let joindate = moment.utc(member.joinedAt).format("ddd, Do MMMM YYYY");
  let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";
  const uinfoembed = new Discord.MessageEmbed()

  .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))

  .setColor("#cfcfcf")

  .setTimestamp()
  .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
  
  .addField('❮ User ❯', [
				`**❋ Username:** ${member.user.tag}`,
        `**❋ Nickname:** ${nickname}`,
				`**❋ ID:** ${member.user.id}`,
				`**❋ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
				`**❋ Created At:** ${moment(member.user.createdTimestamp).format('LT')} | ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
        `**❋ Joined At:** ${moment.utc(member.joinedAt).format("ddd, Do MMMM YYYY")} | ${Math.floor(y / 86400000)} days ago`,
				`**❋ Status:** ${status[member.user.presence.status]}`,
				`**❋ Game:** ${game()}`,
				`\u200b`
			])  

  .addField('❮ Member ❯', [
				`**❋ Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
				`**❋ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`,
				`**❋ Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
				`**❋ Roles [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None'}`, 
				`\u200b`
			]);

 message.channel.send(uinfoembed).catch(console.error);
    }
}