const mongoose = require('mongoose');
const Guild = require('../../models/guild');

module.exports = async (client, guild) => {
    guild = new Guild({
        _id: mongoose.Types.ObjectId(),
        guildID: guild.id,
        guildName: guild.name,
        guildOwner: guild.ownerID, 
        ownerUsername: guild.owner.user.tag,
        guildUserCount: guild.memberCount,
        prefix: process.env.PREFIX
    });

    guild.save()
    .then(result => console.log(result))
    .catch(err => console.error(err));

    console.log('I have joined a new server!');
};