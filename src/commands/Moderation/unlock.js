const Discord = require("discord.js");
const fs = require("graceful-fs");

module.exports = {
    name: "unlock",
    description: "Unlocks the current channel",
    run: async(client, message, args) => {
      message.delete();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permission to do that 🤡");
    if(!message.mentions.channels.first)
    message.channel.createOverwrite(message.guild.roles.everyone, {
        SEND_MESSAGES: true
    });
    message.channel.send("This channel has been successfully unlocked!").then(m => m.delete({timeout: 30000})).catch(console.error);
    }
}