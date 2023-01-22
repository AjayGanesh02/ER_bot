require('dotenv').config()
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,]
});

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, msg => {
    if (msg.author.bot) return;
    const regex = /\b[a-z|A-Z]*[er|ER]\b/
    if (regex.test(msg.content)) {
        const word = msg.content.match(regex)[0];
        msg.reply(`${word}? I hardly know her!`);
    }
})

client.login(process.env.BOT_TOKEN);

