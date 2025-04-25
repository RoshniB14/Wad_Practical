
const { Command } = require('commander');
const program = new Command();

program
  .name('greet-cli')
  .description('Simple CLI to greet users and show time')
  .version('1.0.0');

program
  .command('greet')
  .description('Greet a user by name')
  .requiredOption('-n, --name <name>', 'Name of the user')
  .option('-t, --time', 'Show current date and time')
  .action((options) => {
    console.log(`Hello, ${options.name}!`);
    if (options.time) {
      console.log(`Current Time: ${new Date().toLocaleString()}`);
    }
  });

program.parse(process.argv);
