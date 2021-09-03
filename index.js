const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready' , () => {
    console.log('Ready!');
});

client.on('guildMemberAdd', (member) => {
    let welcomeChannel = client.channels.cache.get('869748860233351186');
    welcomeChannel.send(`Welcome in Fortnite & Pixel ${member} !`);

    member.roles.add('869748859507703853');
});

client.on('guildMemberRemove', member  => {
    let leaveChannel = client.channels.cache.get('883082105620422687');
    leaveChannel.send(`${member} est parti`);
});

client.on('message', (msg) => {
    if (msg.content.startsWith('!dm-user')) {
        if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send('Vous ne pouvez pas éxecuter cet commande !')

        const args = msg.content.split(" ").slice(0);
        let mp = args.join(" ")
        if (mp.length > 2000) return msg.channel.send('Écrit ton message')
        
        if (!mp) return msg.channel.send('Écrit ton message')

        let user = msg.mentions.users.first()
        if (!user) return msg.channel.send('Mentionne un utilisateur')
        user.send(mp.slice(args[0].length).trimLeft())
        msg.reply(`Le message a bien été envoyer`)
    } 
    if (msg.content === 'ntm') {
        msg.reply(`Évite les insultes !`);
    }
    if (msg.content === 'fdp') {
        msg.reply(`Évite les insultes !`);
    }
    if (msg.content === 'tg') {
        msg.reply(`Évite les insultes !`);
    }
    if (msg.content === 'ftg') {
        msg.reply(`Évite les insultes !`);
    }
});

client.on('message', (msg) => {
    if (msg.content === '!pixel') {
        msg.channel.send(`**Pour avoir accés a tous les pixel rend toi dans le salon #👉🏻・𝐑𝐚𝐧𝐤-𝐏𝐢𝐱𝐞𝐥 ou demande à un Helpeur**`);
    }
    if (msg.content === '!ntweet') {
        msg.channel.send(`**Salut NeeyZuu a posté un nouveau tweet : ** https://twitter.com/neeyzuftn `);
    }
     if (msg.content === '!gtweet') {
        msg.channel.send(`**Salut Gamepr1x a posté un nouveau tweet : ** https://twitter.com/gamepr1x `);
    } 
    if (msg.content === '!700') {
        msg.channel.send(`**__Bonjour à tous,__**  :wave: \n\n  :round_pushpin:**Merci à tous pour les __700 Membres__ c'est __incroyable__ !**\n        **Un concours a été lancé il reste des places , suffit de créer un ticket !** \n \n**Bonne journée à vous , Cordialement le Staff :heart: **`);
    } 
});

const prefix = "!"

client.on('message', async message => {
    let args = message.content.substring(prefix.length).split(" ");

     if (message.content.startsWith(`${prefix}invites`)) {
        try {
            let member = message.mentions.members.first() || message.member;
            let invites = await message.guild.fetchInvites();
            let memberInvites = invites.filter(i => i.inviter && i.inviter.id === member.user.id);

            if (memberInvites.size <= 0) {
                return message.channel.send(`${member.user.tag} na invité personne sur ${message.guild.name} !`, (member === message.author ? null : member));
            } 

            let content = memberInvites.map(i => i.code).join("\n")
            let index = 0;
            memberInvites.forEach(invite => index += invite.uses);

            console.log(index)
            let inviteEmbed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setDescription(`Invitations de ${member.user.tag}`)
            .addField(`Nombre d'invitations`, index.toString())
            .addField(`Soon`, `discord.gg/pixelfr`)
            .setTitle(`Invitations de ${member.user.tag}`)

            message.channel.send(inviteEmbed)
        } catch (e) {
            return console.log(e)
        }
    }
});
        
client.login(process.env.TOKEN);
