
const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, tools) => {


    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('This requires the permission: ADMINISTRATOR');

    if (!args[0]) return message.channel.send('Proper Usage: <prefix>poll question');

    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setFooter('Zareaguj Rekacja, aby zagłosować.')
        .setDescription(args.join(' '))
        .setTitle(`GŁOSOWANIE`);

    let msg = await message.channel.send(embed);

    await msg.react('✅'); 
    await msg.react('❌');

    message.delete({timeout: 10}); 

}
module.exports.help = {
    name:"glosowanie"
  }