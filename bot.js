const Discord = require("discord.js");
var prefix = '%';
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame(`By 𝒮ℋ𝒜𝒟𝒪𝒲 | Shop`,'https://www.twitch.tv/𝒮ℋ𝒜𝒟𝒪𝒲');
  console.log(' 𝒮ℋ𝒜𝒟𝒪𝒲 Bot Is Online')
});

client.on('message', message => {
    if(message.content.startsWith(prefix + "start")){
        if(!message.member.hasPermission("ADMINISTRATOR")){

            let embedaa = new Discord.RichEmbed()
            .setColor("#FF00FF")
            .setThumbnail(message.author.avatarURL)
                                                .addField('ADMINISTRATOR | ليس لديك صلاحية',   "<@" + message.author.id + ">")
              message.channel.sendEmbed(embedaa);
              message.delete(embedaa);

        }else{
            setInterval(function(){
                message.channel.setName("p̲");
                message.channel.setName("p̲r̲");
                message.channel.setName("p̲r̲o̲");
                message.channel.setName("p̲r̲o̲ ");
                message.channel.setName("p̲r̲o̲ g̲");
                message.channel.setName("p̲r̲o̲ g̲a̲");
                message.channel.setName("p̲r̲o̲ g̲a̲m̲");
                message.channel.setName("p̲r̲o̲ g̲a̲m̲e̲");
                message.channel.setName("p̲r̲o̲ g̲a̲m̲e̲r̲");
            },1000);


        }
    }


})
client.login(process.env.BOT_TOKEN);
