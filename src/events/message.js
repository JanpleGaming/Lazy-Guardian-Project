const mongoose = require('mongoose');
const Guild = require('../../models/guild');
const { MessageEmbed } = require('discord.js')
const active = new Map();
const embed = new MessageEmbed()
module.exports = async (client, message) => {

    if (message.author.bot) return;

    const settings = await Guild.findOne({
        guildID: message.guild.id,
    }, (err, guild) => {
        if (err) console.error(err)
        if (!guild) {
            const newGuild = new Guild({
            _id: mongoose.Types.ObjectId(),
            guildID: message.guild.id,
            guildName: message.guild.name,
            guildOwner: message.guild.ownerID, 
            ownerUsername: message.guild.owner.user.tag,
            guildUserCount: message.guild.memberCount,
            prefix: process.env.PREFIX
    });

            newGuild.save()
            .then(result => console.log(result))
            .catch(err => console.error(err));

            return message.channel.send(
              embed.setColor('GREEN').setDescription('Thank you for adding me to your discord server! Your guild doesn\'t appear to be in our database so I did you a lil favor and added it for you. You should be able to use commands now! If you have any questions and/or concerns, feel free to contact the owner of this bot, @Wintercearig#8773!')).then(m => m.delete({timeout: 20000}));
        }
    });


    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const prefix = message.content.match(prefixMention) ? message.content.match(prefixMention)[0] : settings.prefix;

    if(message.content === `<@!${client.user.id}>`) {
      let pingClient = new MessageEmbed()
        .setColor('#cfcfcf')
        .setTitle(`The prefix for this server is ( ${settings.prefix} )!  Try using ${settings.prefix}help!`)
      message.channel.send(pingClient);
    return;
}
    if (!message.guild || message.author.bot) return;
    if (!message.content.startsWith(prefix))

    return;
    var options = {
    active: active
}
    if (!message.member) message.member = await message.guild.fetchMember (message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    
    if (command)
        command.run(client, message, args, options);
};