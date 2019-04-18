const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**POMOC**")
    .setURL(bicon)
    .setColor('RANDOM')
    .setThumbnail("https://images-ext-2.discordapp.net/external/V20rFXxwRD_Zji0Kfm6S6OUW1yhO3CTiPkJIVg8mgP8/http/www.gimpuj.info/gallery/30301_01_04_10_7_21_26.gif")
    .addField("![kategoria]", "Użyj ![kategoria], aby wyświetlić wszystkie polecenia z tej kategorii, na przykład: !moderacja.")
    .addBlankField()
    .addField("Liczba Komend:", "37")
    .addBlankField()
    .addField("Kategorie:", "``1.`` Informacyja \n``2.`` Moderacyja \n``3.`` 4FUN \n``4.`` API \n``5.`` NSFW")

    message.channel.send(botembed);
    message.delete({timeout: 10}); 
}


module.exports.help = {
  name:"pomoc"
}