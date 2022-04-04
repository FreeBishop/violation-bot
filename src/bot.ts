// Event Handler imports
import { messageCreate } from './eventHandlers/messageCreate';
import { onReady } from './eventHandlers/onReady';

// Server imports
import { Client, Intents } from 'discord.js';
import 'dotenv/config';

// Initialize bot client and token
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES],
  partials: ['MESSAGE', 'CHANNEL'],
});
const token = <string>process.env.TOKEN;

// Event handlers
client.on('messageCreate', messageCreate);
client.on('ready', onReady);

// Bot login
client.login(token);
