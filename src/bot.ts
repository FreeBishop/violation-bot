import Discord from 'discord.js';
import 'dotenv/config';

const client = new Discord.Client();

const token = <string>process.env.TOKEN;

client.on('message', (msg) => {
  const message = msg.content.split(' ');
});

client.on('ready', () => {
  console.log('This bot is online!');
});

client.login(token);
