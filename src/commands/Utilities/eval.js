const { MessageEmbed } = require("discord.js");
const beautify = require('beautify');
const config = require('../../../config.json');

module.exports = {
    name: "eval",
    category: "misc",
    args: true,
    description: "evaluates/test the code",
    usage: "[args input]",
    run: (client, message, args) => {

      if(message.author.id != config.OWNERID)  {
      let embed1 = new MessageEmbed()
      .setTitle("❌ Access Denied!")
      .setDescription("You aren't one of the developers of this bot!")
      .setColor("RED")
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setTimestamp()
      return message.channel.send(embed1).then(m => m.delete(5000))
      }


        if (!args[0]) {
          let embed2 = new MessageEmbed()
          .setTitle("❌ | You must evaluate something!")
          .setColor('RED')
            message.channel.send(embed2).then(m => m.delete(5000));
        }

        try {
            const code = args.join(" ");
            if (code.includes("client.token") || code.includes("process.env") || code.includes("TOKEN") || code.includes("process.env.TOKEN")) {
            evaled = "token";
          } else {
            evaled = eval(code);
          }

            const toEval = args.join(" ");
            const evaluated = eval(toEval);

            const embed = new MessageEmbed()
            .setColor("#00FF00")
            .setTimestamp()
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTitle("Eval")
            .addField("To evaluate", `\`\`\`js\n${beautify(args.join(" "), { format: "js" })}\n\`\`\``)
            .addField("Evaluated", `\`${evaluated}\``)
            .addField("Type of:", typeof (evaluated));

            message.channel.send(embed);

        }
         catch (e) {
            const embed = new MessageEmbed()
            .setColor("#FF0000")
            .setTitle(":x: Error!")
            .setDescription(e)
            .setFooter(client.user.username, client.user.displayAvatarURL());

            message.channel.send(embed);

        }
    },
};  