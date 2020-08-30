const urban = require('urban');
const Discord = require('discord.js');
const ok = ('https://www.wuwm.com/sites/wuwm/files/styles/x_large/public/201701/Fotolia_90672351_Subscription_Monthly_M.jpg')
module.exports = {
    name: 'urban',
    desciprtion: 'Gives the urban dictionary definiton of a word',
    usage: '[word]',
    run: async(client, message, args, options) => {
      
        if (args.length < 1) {
          let word = new Discord.MessageEmbed()
          .setColor('RED')
          .setDescription('**:x: | You need to enter a word in order to receive its urban meaning!**')
            return message.channel.send(word);
        }
        let word = args.join(' ');

        urban(word).first(json => {
            if (!json) {
              let error = new Discord.MessageEmbed()
              .setColor('RED')
              .setDescription('No such word exists!')
                return message.channel.send(error);
            }
            const def = new Discord.MessageEmbed()
                .setColor('#cfcfcf')
                .setDescription(`**Word:** ${json.word}\n**Definition:** ${json.definition}`)
                .setFooter(`Written by: ${json.author}`)
                .setThumbnail(ok)
            message.channel.send(def);
        });
    },
};