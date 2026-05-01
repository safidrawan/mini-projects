import CommandLine from './CommandLine.js';

CommandLine.ask('What is your name?').then(name => CommandLine.print(`Hello ${name}`));

async function main () {
    const accountName = await CommandLine.ask('What is your account name?')

    const account = Account.find(accountName)
}