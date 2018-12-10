const Discord = require("discord.js");
var prefix = '%';
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame(`Joker | Shop`,'https://www.twitch.tv/jokershop');
  console.log(' Joker Shop Bot Is Online')
});

client.on('message', message => {
    if(message.content.startsWith(prefix + "joker")){
        if(!message.member.hasPermission("ADMINISTRATOR")){

            let embedaa = new Discord.RichEmbed()
            .setColor("#FF00FF")
            .setThumbnail(message.author.avatarURL)
                                                .addField('ADMINISTRATOR | ليس لديك صلاحية',   "<@" + message.author.id + ">")
              message.channel.sendEmbed(embedaa);
              message.delete(embedaa);

        }else{
            setInterval(function(){
                message.channel.setName("J");
                message.channel.setName("jo");
                message.channel.setName("jok");
                message.channel.setName("joke");
                message.channel.setName("Joker");
                message.channel.setName("Joker");
                message.channel.setName("Joker ");
                message.channel.setName("Joker S");
                message.channel.setName("Joker Sh");
                message.channel.setName("Joker Sho");
                message.channel.setName("Joker Shop");
            },1000);


        }
    }


})
client.login(process.env.BOT_TOKEN);
