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
        await Account.create(accountName)
    } else {
        CommandLine.print('Account not Created.')
    }
}

async function promptAction(account) {
    const response = await CommandLine.ask('What do you want to do? (view/deposit/withdraw): ');

    if (response == 'view') {
        CommandLine.print(`Account: ${account.name} \n Balance: ${account.balance}`)
    }
    if (response == 'deposit') {
        const amount = parseFloat(await CommandLine.ask('How much?\n'))
        await account.deposit(amount);
        CommandLine.print(account.balance)
    }
    if (response == 'withdraw') {
        const amount = parseFloat(await CommandLine.ask('How much?\n'))
        await account.withdraw(amount)
        CommandLine.print(account.balance)

    }
}

main();
