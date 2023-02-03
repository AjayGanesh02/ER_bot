require('dotenv').config()
const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, msg => {
    if (msg.author.bot) return;
    console.log(`running on message: ${msg.content}`)
    console.log(`sent by ${msg.author}`)
    const regex = /\b[a-z|A-Z]{2,}[[er]|[ER]|[eR]|[Er]]\b/
    if (regex.test(msg.content)) {
        const word = msg.content.match(regex)[0];
        msg.reply(`${word}? I hardly know her!`);
    }
})

client.login(process.env.BOT_TOKEN);

