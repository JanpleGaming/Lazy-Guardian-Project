const { MessageEmbed } = require("discord.js");
const math = require("mathjs");

module.exports = {
  name: "math",
  category: "fun",
  run: async (client, message, args) => {
    message.delete()
    try {
      if (!args[0]) return message.channel.send("Please Give Me an Equation!");

      const embed = new MessageEmbed()
        .setColor(`#cfcfcf`)
        .setTitle(`Result`)
        .setDescription(math.evaluate(args.join(" ")))
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      message.channel.send(`You have to provide a basic equation!`).then(() => console.log(error)).then(m => m.delete({timeout: 30000}));
    }
  }
};