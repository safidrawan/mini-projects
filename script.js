import Account from "./Account.js";
import CommandLine from "./CommandLine.js";

async function main() {
    try {
        const accountName = await CommandLine.ask("Account name: ");
        const account = await Account.find(accountName);

        if (account == null) promptCreateAccount(accountName)

        if (account) await promptAction(account)


    } catch (error) {
        CommandLine.print(error.message);
    }
}

async function promptCreateAccount(accountName) {
    const response = await CommandLine.ask("Account not found. Do you want to create? (yes/no): ");
    if (response == 'yes') {
        Account.create(accountName)
    } else {
        await CommandLine.print('Account not Created.')
    }
}

async function promptAction(account) {
    const response = await CommandLine.ask('What do you want to do? (view/deposit/withdraw): ');

    if (response == 'view') {
        await CommandLine.print(`Account: ${account.getName()} \n Balance: ${account.getBalance()}`)
    }
    if (response == 'deposit') {
        const amount = parseFloat(await CommandLine.ask('How much?\n'))
        await account.deposit(amount);
        await CommandLine.print(account.getBalance())
    }
    if (response == 'withdraw') {
        const amount = parseFloat(await CommandLine.ask('How much?\n'))
        await account.withdraw(amount)
        await CommandLine.print(account.getBalance())

    }
}

main();
