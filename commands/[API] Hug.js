const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {


    var subreddits = [

        'http://68.media.tumblr.com/cb06ea17e532d49f71130dc47d26f971/tumblr_oku2wjbegP1vvvk86o1_500.gif',
        'http://gifimage.net/wp-content/uploads/2017/10/couple-hug-gif-8.gif',
        'https://media1.tenor.com/images/7a72691a20eaefe593007f592544bbf1/tenor.gif?itemid=7931494',
        'https://media.giphy.com/media/LoDNYBrjSXvgY/giphy.gif',
        'https://data.whicdn.com/images/49896072/original.gif',
        'https://media.giphy.com/media/QHSV5Rv8SEa1W/giphy.gif',
        'http://33.media.tumblr.com/53f8d54430cf5d9f63c7f0bd63c145db/tumblr_nt7f9mIOuA1r49902o1_400.gif',
        'https://media.giphy.com/media/oYyYUFiPmipOg/giphy.gif',
        'https://data.whicdn.com/images/51656938/original.gif',
        'https://media.giphy.com/media/t8ymGHOeEbKZq/giphy.gif',
        'https://cdn173.picsart.com/227903715001201.gif?r1024x1024',
        'https://78.media.tumblr.com/b2b0f40f436ff22d118a9ee045274a04/tumblr_inline_papxb0YLgO1r25xgk_500.gif',
        'https://data.whicdn.com/images/246415925/original.gif',
        'https://media.giphy.com/media/aN94XqfV5vrLW/giphy.gif',
        'https://media1.tenor.com/images/7a72691a20eaefe593007f592544bbf1/tenor.gif?itemid=7931494',
        'http://gifimage.net/wp-content/uploads/2017/10/couple-hugging-gif-tumblr-7.gif',
        'http://s12.favim.com/orig/160503/couple-hug-karen-page-matt-murdock-Favim.com-4272912.gif',
        'https://media2.giphy.com/media/tTdAJwKqH1KGQ/giphy.gif',
        'https://media1.tenor.com/images/3255ef702d1bb0bbeadf71462ea7a305/tenor.gif?itemid=7970435',
        'https://data.whicdn.com/images/112713375/original.gif',
        'http://gifimage.net/wp-content/uploads/2017/10/couple-hugging-gif-tumblr-3.gif',
        'http://78.media.tumblr.com/64a003f55c758952aace92ffaac4c663/tumblr_p2cqnd9vQn1v8hcteo1_500.gif',
        'https://i.pinimg.com/originals/35/98/98/35989892c57b4c0a4ab9be05fbc2f3c7.gif',
        'https://i.gifer.com/TQQW.gif',
        'https://67.media.tumblr.com/tumblr_mdjl1ridH21rkueieo1_500.gif'
       
    
    
            
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
        
       
                var user = message.mentions.members.first()
                if(!user){
                    message.reply(`Nie ptrzulisz samego siebie!.`)
                }
                const embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setDescription(`${message.author} przytula **${user}**`)
                    .setImage(sub);
                message.channel.send({
                    embed
                });

}

module.exports.help = {
    name: "przytul",
    description: "Sends a hug gif you can choose to mention person who you want hug.",
    usage: "/hug [@USER]"

}