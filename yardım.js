const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let codare = "desteksunucusulinki"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Yardım', client.user.avatarURL())
    .setDescription('**Örnek Kullanım:** `a.yardım Kategori`\n**Örnek:** `a.yardım Genel`')
    .addField('Komutlar:', 
    `[a.yardım Genel](${codare})
    [a.yardım Kullanıcı](${codare})
    [a.yardım Moderasyon](${codare})
    [a.yardım Moderasyon2](${codare})
    [a.yardım Yapılandırma](${codare})
    [a.yardım Sunucu](${codare})
    [a.yardım Resim](${codare})
    [a.yardım nsfw](${codare})`)
    .setImage('https://cdn.discordapp.com/attachments/893195701763309608/893926516944146513/cb76e022dead098c571fd6c249494c4a.png')
    .setThumbnail(client.user.avatarURL())
    .setColor("BLUE")
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
if(args[0] === 'genel' | args[0] === 'eğlence' | args[0] === 'kullanıcı' | args[0] === 'moderasyon' | args[0] === 'moderasyon2' | args[0] === 'yapılandırma' | args[0] === 'sunucu' | args[0] === 'resim' | args[0] === 'nsfw') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription(client.commands.filter(c=>c.conf.kategori === args[0]).map(kmt=>kmt.help.name).join('\:white_small_square: - g!\n ') + '» Linkler\n[Davet Et] https://discord.com/oauth2/authorize?client_id=893217228135231488&scope=bot&permissions=4294967295)( ') 
.setThumbnail(client.user.avatarURL())
.setColor("BLUE")
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
message.channel.send(embed)
} else {
message.channel.send("İyi Günler Dileriz / Bu komut botta yoktur")
}
}

exports.conf = {
    aliases: []
}
exports.help = {
    name: "yardım"
}