const Discord = require('discord.js')
const randomPuppy = require('random-puppy')
// I actually havent tested this since I don't use vanilla discord.js, but it should work

const { get } = require('request-promise-native') // You can also use normal request if you want, you would just lose the ability of using .then(). Or you could just use snekfetch

module.exports.run = async (client, message) => {
    if (!message.channel.nsfw) return message.reply("You can use this command only in nsfw channels!");

    var subreddits = [
 
        'BDSM',
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                .setColor('RANDOM"')
                .setAuthor(message.author.tag, message.author.avatarURL)
                .setFooter("Nsfw Pic :smirk:").setTimestamp()
                .setImage(url);
            message.channel.send({
                embed
            });
        })
}



module.exports.help = {
    name: "bdsm",
    description: "Sends random naughty picture related to BDSM.",
    usage: "/randomnsfw and you will get naughty picture"
}