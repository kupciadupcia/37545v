const Discord = module.require('discord.js');

var fortunes = [
    "Tak",
    "Nie",
    "Może",
    "Nie Wiem"
];


module.exports.run = async (bot, message, args) => {

if(!args[0]){
  return message.channel.send(":x: " + "| Zadaj pytanie !")
}
if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
else message.channel.send(":x: " + "| ... :(");
}

module.exports.help = {
    name: "pytanie"
}