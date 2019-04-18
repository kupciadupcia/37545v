const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("**Oto Komendy kategorii: 4FUN**")
    .setURL(bicon)
    .setColor('RANDOM')
    .setThumbnail("https://images-ext-2.discordapp.net/external/V20rFXxwRD_Zji0Kfm6S6OUW1yhO3CTiPkJIVg8mgP8/http/www.gimpuj.info/gallery/30301_01_04_10_7_21_26.gif")
    .addField("4FUN:", "```- Pytanie || Zadaj Pytanie Botu !.\n- Avatar || Wyświetl Avatar Innego Użytkownika lub twój. \n- Megusta || Wysyła Img ''Megusty''. \n- Lenny || Wysyła Lenny Face. \n- slots || Maszyna Losująca (Która Nic Nie Daje.) \n- Ascii || Wysyła Ascii-Art'a ```")
    message.channel.send(botembed);
    message.delete({timeout: 10}); 
}


module.exports.help = {
  name:"4fun"
}