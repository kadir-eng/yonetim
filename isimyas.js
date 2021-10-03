const discord = require("discord.js");

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new discord.MessageEmbed().setColor("RED").setDescription(`<@${message.author.id}> bu işlem için \`ADMINISTRATOR\` olman gerekli!`));

    var user = message.mentions.users.first() ? message.guild.member(message.mentions.users.first()) : null;
    if (!user) return message.channel.send(new discord.MessageEmbed().setColor("RED").setDescription(`<@${message.author.id}> bir kullanıcı etiketlemen gerekli!`));

    if ((args||[]).length < 2) return message.channel.send(new discord.MessageEmbed().setColor("RED").setDescription(`<@${message.author.id}> isim ve yaş yazman gerekli!`));

    args = args.splice(1);
    var yas = args[args.length - 1];
    var ad = args.filter((e, i) => i != args.length - 1).join(' ');

    user.setNickname(`${ad} | ${yas}`);
    message.channel.send(new discord.MessageEmbed().setColor("GREEN").setDescription(`<@${message.author.id}>, <@${user.id}> kullanıcısının ismi \`${ad} | ${yas}\` olarak ayarlandı.`));
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'isim',
    description: 'etiketlediğin kullanıcının ismini düzenler.'
};
