import { commandHandler } from '../commandHandlers/commandHandler';
import { commandPrefix } from '../etc/prefix';
import { Message } from 'discord.js';
import 'dotenv/config';

/**
 *  Message event listener that handles what to do when a message is created in the server
 *
 * @NOTE Add the ability so it's only available in the violations chat...so users can't spam in a different channel
 *  This can be done through grabbing the message channel ID through Discord client
 * @NOTE Create a COMMAND HANDLER function
 * @param message The Discord message object
 * @returns
 */
export const messageCreate = (message: Message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content.startsWith(commandPrefix)) {
    if (message.channel.id === <string>process.env.CHANNEL_ID) {
      const messageContents = message.content.split(' ');
      commandHandler(messageContents);
    } else {
      message.channel.send('Commands with Violation Bot are only enabled on the assigned channel');
    }
  } else {
    return;
  }
};
