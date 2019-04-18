const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const folefel = "Kangurek By: Folefel#1162"

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Usunięto ${args[0]} wiadomosci.`).then(msg => msg.delete(5000));
    message.delete({timeout: 10}); 
  });
}


module.exports.help = {
  name: "clear"
}