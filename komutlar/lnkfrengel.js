const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('Hey Bu Ayarı Kullanabilmek için `aç` yada `kapat` yazmalısın!')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    var i = await db.set(`reklam_${message.guild.id}`, 'acik')
   
      message.channel.send('Reklam Engel başarıyla açıldı! `Üyeleri Yasakla` yetkisine sahip olanların reklamı engellenmicektir.')
    }
  
  if (args[0] == 'kapat') {
    var i = await db.set (`reklam_${message.guild.id}`, 'kapali')
      message.channel.send('Reklam Engel başarıyla kapatıldı! Artık herkes reklam yapabilir.')
    }
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['advertisement','reklam', 'reklam-engel'],
  permLevel: 0
};

exports.help = {
  name: 'reklamengel',
  description: '[Admin Komutu]',
  usage: 'reklamengel'
};