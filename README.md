# ER Bot

a bot that scans messages for words ending in -er and replies "____er? I hardly know her!"

my magnum opus

This bot uses the `discord.js` library to perform message scanning. 
It requires the following intents:
```javascript
intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
```

I just threw in every authorization I could for it tbh.

## installation
In order to use, clone this repo:
```bash
git clone https://github.com/AjayGanesh02/ER_bot.git
```
then, create a `.env` file with `BOT_TOKEN=[your bot token here]` in it.
run the following inside the project main directory
```bash
npm install
npm install pm2 -g
pm2 start index.js
```
for further info on starting, read about pm2 here https://github.com/Unitech/pm2