// We require 2 packages - discord.js & moment
// `npm i moment` 
const Discord = require('discord.js'); // We require this because of the embed
const moment = require('moment');

module.exports.run = async (client, message, args) => {

    let user;

    if (message.mentions.users.first()) {
         user = message.mentions.users.first();
    } else {
         user = message.author;
     }

     const member = message.guild.member(user);

     // Forming the Embed
     const embed = new Discord.RichEmbed() // Use Discord.MessageEmbed if you use the master version
        .setColor('RANDOM') // I just put random in here, but you can chnage it to anything else.
        .setThumbnail(user.avatarURL)
        .setTitle(`${user.username}#${user.discriminator}`)
        .addField('ID:', `${user.id}`, true)
        .addField('Nazwa:', `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField('Stworzył konto :', `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        .addField('Dołaczyl:', `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
        //.addField('Client:', `${user.client}`, true) // Turns out this doesn't work - We don't need this.
        .addField('Status:', `${user.presence.status}`, true)
        .addField('Aktualna gra:', `${user.presence.game ? user.presence.game.name : 'None'}`, true)
        .addField('Role:', member.roles.map(roles => `${roles.name}`).join(', '), true)
        .setFooter(`Utworzone dla ${message.author.username}#${message.author.discriminator}`)

    // Send the Embed
    message.channel.send({embed});
    message.delete({timeout: 10}); 

}


module.exports.help = {
    name:"userinfo"
  }