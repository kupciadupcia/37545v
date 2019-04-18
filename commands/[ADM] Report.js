const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Usage: !report <user> <reason>");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setTitle("**:red_circle: Nowe Zgłoszenie! :red_circle:**")
    .addBlankField()
    .setColor(red)
    .addField("Zgłoszony", `${rUser} ID: ${rUser.id}`)
    .addField("Zgłaszający", `${message.author} ID: ${message.author.id}`)
    .addField("Kanał", message.channel)
    .addField("Powód", rreason);

    let reportschannel = message.guild.channels.find(`name`, "publiczny");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    reportschannel.send(reportEmbed);
    message.delete({timeout: 10}); 

}
 

module.exports.help = {
  name: "report"
}