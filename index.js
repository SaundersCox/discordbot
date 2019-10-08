const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTk1Njg3MjU5MTU2Nzc0OTIz.XRuosg.rdPa1A03wTQE2atgAbjPJTQDyGU';

const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is online!');
});

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'embed':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .addField('Class', args[1])
            .addField('Current Server', message.guild.name)
            .setColor(0xF1C40F)
            .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);
            break;

    }
})

bot.login(token);