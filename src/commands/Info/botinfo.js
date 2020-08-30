const { MessageEmbed, version: djsversion } = require('discord.js');
const { version } = require('../../../package.json');
const { utc } = require('moment');
const osutils = require('os-utils');
const ms = require('ms');
const os = require('os');

module.exports = {
    name: 'botinfo',
    aliases: ['bot'],
    description: 'Displays the bots status',
}

module.exports.run = async (client, message, args) => {
  
  function duration(ms) {
      const sec = Math.floor((ms / 1000) % 60).toString()
      const min = Math.floor((ms / (1000 * 60)) % 60).toString()
      const hrs = Math.floor((ms / (1000 * 60 * 60)) % 24).toString()
      const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
      return `${days.padStart(2, '0')}d, ${hrs.padStart(2, '0')}h, ${min.padStart(2, '0')}m, ${sec.padStart(2, '0')}s `
  };

	const core = os.cpus()[0];
  osutils.cpuUsage(function(v) {

	var embed = new MessageEmbed()

		.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 512 }))
		.setColor('#cfcfcf')
    .setTitle(`Bot info for __${client.user.username}__`)
		.addField('❮ General ❯', [
			`**❋ Client:** ${client.user.tag} (${client.user.id})`,
			`**❋ Commands:** ${client.commands.size}`,
			`**❋ Servers:** ${client.guilds.cache.size.toLocaleString()} `,
			`**❋ Users:** ${client.users.cache.size.toLocaleString()}`,
			`**❋ Channels:** ${client.channels.cache.size.toLocaleString()}`,
			`**❋ Creation Date:** ${utc(client.user.createdTimestamp).format('MMMM Do, YYYY, HH:mm:ss')}`,
			`**❋ Node.js:** ${process.version}`,
			`**❋ Version:** v${version}`,
			`**❋ Discord.js:** v${djsversion}`,
			'\u200b'
		])
		.addField('❮ System ❯', [
			`**❋ Platform:** ${process.platform}`,
			`**❋ Uptime:** ${duration(client.uptime)}`,
			`**❋ CPU:**`,
			`\u3000 Cores: ${os.cpus().length}`,
			`\u3000 Model: ${core.model}`,
			`\u3000 Speed: ${core.speed}MHz`,
      `\u3000 Usage: ${(v * 100).toString().split(".")[0]+ "." + (v * 100).toString().split(".")[1].split('')[0] + (v * 100).toString().split(".")[1].split('')[1]}%`,
			`**❋ Memory:**`,
			`\u3000 Mem Used: ${(process.memoryUsage().heapTotal / 1024 / 1024 ).toFixed(2) + "MB"}`,
			`\u3000 Ram Used: ${(process.memoryUsage().heapUsed / 1024 / 1024 ).toFixed(2) + "MB"}`
		])
		.setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL({ dynamic: true, size: 512 }))
		message.channel.send(embed).catch(console.error);
	})}