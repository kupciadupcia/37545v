
const request = require('request'); 

const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let emb = new Discord.RichEmbed()
                    .setImage(body)
                    .setColor("#00ff00")
                    .setTitle("Prosze, oto twój wirtualny kotek ! :cat:")
                              
                   message.channel.send(emb)  
            }
        });
    }

module.exports.help = {
  name:"kot"
}