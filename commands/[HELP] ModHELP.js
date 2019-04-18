const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**Oto Komendy kategorii: MODERACJA**")
    .setURL(bicon)
    .setColor('RANDOM')
    .setThumbnail("https://images-ext-2.discordapp.net/external/V20rFXxwRD_Zji0Kfm6S6OUW1yhO3CTiPkJIVg8mgP8/http/www.gimpuj.info/gallery/30301_01_04_10_7_21_26.gif")
    .addField("Moderacyjne:", "```- Ban || Banuje Użytkownika. \n- Kick || Wyrzuca Użytkownika. \n- Clear || Usuwa Wiadomości. \n- Say || Wysyła Wiadomość Jako Bot. \n- Glosowanie || Tworzy Ankiete / Głosowanie```")

    message.channel.send(botembed);
    message.delete({timeout: 10}); 
}
 

module.exports.help = {
  name:"moderacja"
}