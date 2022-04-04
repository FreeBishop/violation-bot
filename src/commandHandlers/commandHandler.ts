/**
 *  Main command handler that will receive a list of words indicating which command to run and any additional input (if valid) for that command.
 *  A switch case is used to determine which command to run
 *
 * @param keywords List containing command and any another input
 */
export const commandHandler = (keywords: String[]) => {
  const command = keywords[0].substring(1, keywords[0].length);

  // Insert commands below thorugh imported modules
  // if(command)
};
