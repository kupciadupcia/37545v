const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(bicon)
    .addField("Nazwa Bota", `${bot.user.username}`, inline)
    .addField("Właściciel Bota", "<@419172070841122827>", inline )
    .addField("Księga Bota", "Discord.js", inline)
    .addField("Uptime Bota", `${bot.uptime} sec.`)
    .addField("Stworzony", bot.user.createdAt)
    .setFooter(`Info: ${bot.user.username}. Developed by: folefel </>#1162`)
    
    message.channel.send(botembed);
    message.delete({timeout: 10}); 
}

module.exports.help = {
  name:"botinfo"
}