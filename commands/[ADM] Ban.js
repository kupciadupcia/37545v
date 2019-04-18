const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const folefel = "Kangurek By: Folefel#1162"

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: !ban <user> <reason>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return errors.cantfindUser(message.channel);
    if(bUser.id === bot.user.id) return errors.botuser(message); 
    let bReason = args.join(" ").slice(22);
    if(!bReason) return errors.noReason(message.channel);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, bUser, "MANAGE_MESSAGES");

    let banEmbed = new Discord.RichEmbed()
    .setTitle("BAN")
    .setDescription("Hehe :smirk:")
    .setColor('RANDOM')
    .addField("Zbanowany:", `${bUser} ID ${bUser.id}`)
    .addField("Przez:", `<@${message.author.id}> ID ${message.author.id}`)
    .addField("Powód:", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "publiczny");
    if(!incidentchannel) return message.channel.send("none");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
    message.delete({timeout: 10}); 
}

module.exports.help = {
  name:"ban"
}