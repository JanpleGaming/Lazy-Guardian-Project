const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "giveaway",
  description: "Create giveaways!",
  usage: "giveaway <?d or ?h or ?m or ?s> <channel> <prize>",
  category: "Admin",
  run: async (client, message, args) => {
    message.delete();
    const no = new MessageEmbed()
    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.channel.send(no.setDescription(':x: | You don\'t have permission to use this command!').setColor('RED')).then(m => m.delete({timeout: 10000}));
        };


    if (!args[0]) return message.channel.send(no.setDescription(`:x: | You didn\'t specify a time!`).setColor("RED"));
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("s")
    )

      return message.channel.send(no.setDescription(`:x: | You did not use the correct formatting for the time!`).setColor('RED'));

    if (isNaN(args[0][0])) return message.channel.send(no.setDescription(`:x: | That isn\'t a number!`).setColor('RED'));
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(no.setDescription(`:x: | That channel doesn\'t exist!`).setColor('RED'));
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(no.setDescription(`:x: | No prize has been specified!`).setColor('RED'));
    message.channel.send(`*Giveaway created in ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`New giveaway! :tada:`)
      .setDescription(
        `**Host:** ${message.author}\n**Prize:** ${prize}`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(no.setDescription(`:x: | Not enough people have reacted for me to start draw a winner!`).setColor('RED'));
      }
      let le = new MessageEmbed()
      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(le.setDescription(`**Prize:** ${prize}\n**Winner:** ${winner}`).setColor('RANDOM'));
    }, ms(args[0]));
  },
};