const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: String,
    guildName: String,
    guildOwner: String,
    ownerUsername: String,
    guildUserCount: String,
    prefix: String
});

module.exports = mongoose.model('Guild', guildSchema, 'guilds');