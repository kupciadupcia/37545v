const botconfig = require("./botconfig.json");
const token = "NTYzNDExNTE1ODkwMjA0Njcy.XLOI6w.N15jlRHVnjxSabPzqX2a9_8i3P4"
const Discord = require("discord.js");

const prefix = '!';
const ownerID = '393788668701179914';

const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`komenda ${f} zostala załadowna !`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} jest online na ${bot.guilds.size} serwerach!`);
  bot.user.setActivity("!pomoc | Wersja: 1.1", {type: "WATCHING"});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});




bot.login(token);