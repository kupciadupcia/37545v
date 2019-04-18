
const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args, tools) => {


    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('');


    const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setFooter(`**${message.guild.name}**`)
        .setDescription(args.join(' '))
        .setTitle(`Ogłoszenie od: ${message.author.username}`);

    let msg = await message.channel.send(embed);

    message.delete({timeout: 10}); 

}
module.exports.help = {
    name:"oglos"
  }