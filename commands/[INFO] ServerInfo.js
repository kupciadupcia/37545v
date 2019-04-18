const Discord = require("discord.js");
const folefel = "Kangurek By: Folefel#1162"

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setTitle("**Infomracje o Serwerze**")
    .setFooter(folefel)
    .setURL("https://cdn.discordapp.com/attachments/445627853795622921/567705748893728768/kangur.jpg")
    .setColor('RANDOM')
    .setThumbnail(sicon)
    .addField("Nazwa", message.guild.name)
    .addField("Stworzony w", message.guild.createdAt)
    .addField("Dołączyleś w", message.member.joinedAt)
    .addField("Użytkowników", message.guild.memberCount);

    message.channel.send(serverembed);
    message.delete({timeout: 10}); 
}


module.exports.help = {
  name:"serverinfo"
}