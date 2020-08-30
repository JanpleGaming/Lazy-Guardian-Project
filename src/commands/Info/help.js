const { MessageEmbed } = require('discord.js');
const mongoose = require('mongoose');
const Guild = require('../../../models/guild');
const config = require('../../../config.json');

module.exports = {
    name: 'help',
    aliases: ['h'],
    description: 'Displays bot help message.',
    usage: `help [commandName/Aliases]`,
    run: async (client, message, args) => {
        const settings = await Guild.findOne({
            guildID: message.guild.id
        }, (err, guild) => {
            if (err) console.error(err)
            if (!guild) {
                const newGuild = new Guild({
                   _id: mongoose.Types.ObjectId(),
                   guildID: guild.id,
                   guildName: guild.name,
                   guildOwner: guild.ownerID, 
                   ownerUsername: guild.owner.user.tag,
                   guildUserCount: guild.memberCount,
                   prefix: process.env.PREFIX
                })
    
                newGuild.save()
                .then(result => console.log(result))
                .catch(err => console.error(err));
    
                return message.channel.send(`Hmm. Apparently your guild wasn\'t already in our database so we added it back. Probably just an internal error or your guild was mistakenly deleted from mongodb. If you have any questions and/or concerns, feel free to ask the owner here. [Click Me](https://discord.io/TheLoungingArea)`).then(m => m.delete({timeout: 10000}));
            }
        });

        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            return helpMSG(client, message);
        }
    }
}


async function helpMSG(client, message) {
    const settings = await Guild.findOne({
        guildID: message.guild.id
    });

    const embed = new MessageEmbed()
    .setColor('#cfcfcf')
    .setTitle(`Total Commands: \`\`${client.commands.size}\`\``)
    .setDescription(`\*\*❮ Help ❯\*\*\nThe commands below are category commands which will label the different commands within each category. They might be permanent unless the owner of this bot \*\*\*figures out how to make the help command act accordingly for help (category)\*\*\*\n\n\*\*:fist: | \`\`${settings.prefix}\`\`actions\*\*\n\n\*\*:police_officer: | \`\`${settings.prefix}\`\`admin\*\*\n\n\*\*:moneybag: | \`\`${settings.prefix}\`\`economy\*\*\n\n\*\*:tada: | \`\`${settings.prefix}\`\`fun\*\*\n\n\*\*:exclamation: | \`\`${settings.prefix}\`\`info**\n\n\*\*:warning: | \`\`${settings.prefix}\`\`moderation\*\*\n\n\*\*:musical_note: | \`\`${settings.prefix}\`\`music\*\*\n\n\*\*:underage: | \`\`${settings.prefix}\`\`nsfw\*\*\n\n\*\*:wrench: | \`\`${settings.prefix}\`\`utilities\*\*\n\nUseful Links:\n[Support Server](https://discord.io/TheLoungingArea) | [Invite Me](https://rb.gy/e6dbz9)`)
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 512 }))
    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.avatarURL());

    message.channel.send(embed).catch(console.error);
}

async function getCMD(client, message, input) {
  message.delete();

    const settings = await Guild.findOne({
        guildID: message.guild.id
    });

    const embed = new MessageEmbed()

    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));

    let info = `No information found for the **${input.toLowerCase()}** command`;

    if (!cmd) {
        return message.channel.send(embed.setColor('#cfcfcf').setDescription(info)).then(m => m.delete({timeout: 10000})).catch(console.error)
    }

    if (cmd.name) info = `**Command Name**: ${cmd.name}`
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(', ')}`;
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Usage**: ${settings.prefix}${cmd.usage}`;
    }
    if (cmd.usage2) info += `\n**Usage 2**: ${settings.prefix}${cmd.usage2}`;

    return message.channel.send(embed.setColor('#cfcfcf').setDescription(info)).then(m => m.delete({timeout: 10000})).catch(console.error);
}