// 🍎🍌🍒🍓🍈

const Discord = require('discord.js'); // For forming the embed
const moment = require('moment');

// Command Handler
module.exports.run = (client, message, args) => {

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let icon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed() // Remember to use MessageEmbed if you use master
            .setFooter('Wygrałeś!', icon)
            .setTitle(':slot_machine: Sloty :slot_machine:')
            .addField('Rezulataty:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor('RANDOM')
        message.channel.send(wEmbed);

    } else {

        let lEmbed = new Discord.RichEmbed()
            .setFooter('Przegrałeś!', icon)
            .setTitle(':slot_machine: Sloty :slot_machine:')
            .addField('Rezultaty:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor('RANDOM')
        message.channel.send(lEmbed);
    }
}
module.exports.help = {
    name:"slots"
  }