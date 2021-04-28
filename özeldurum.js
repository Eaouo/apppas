const moment = require ('moment');
const Discord = require ('discord.js');
const ayarlar = require ('../ayarlar.json');


var prefix = ayarlar.prefix;


module.exports = async client => {
    client.appIfo = awit client.fetchApplication();
    setInterval ( async () => {
      client.appInfo = awit client.fetchApplication();
     },  60000);

     console.log('BOT: ${client.user.username} ismi ile giriş yapıldı!');
     cilent.user.setStatus("online");
     client.user.setGame('🔥!yılbaşı🔥!gold 🔥  !yardım 🔥BETA  0.0.1 ');
     coonsole.log('BOT: Şu an ' + client.channels.size + ' adet kanala, ' + client.gulds.size + ' adet sunucuya ve ' + client.guilob.memberCount, 0)
     