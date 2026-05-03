import CommandLine from "./CommandLine.js";
import FileSystem from "./FileSystem.js";
export default class Account {

    constructor(name) {
        this.#name = name;
    }

    #name;
    #balance;

    getName() {
        return this.#name;
    }

    getBalance() {
        return this.#balance;
    }

    getFilePath() {
        return `./accounts/${this.#name}.txt`
    }

    async deposit(amount) {
        await FileSystem.write(this.getFilePath(), this.#balance + amount)
        this.#balance = this.#balance + amount
    }
    async withdraw(amount) {
        if (this.#balance < amount ) {
            await CommandLine.print('Insuficient balance.')
            return
        }
        await FileSystem.write(this.getFilePath(), this.#balance - amount)
        this.#balance = this.#balance - amount
    }
    async #load() {
        this.#balance = parseFloat(await FileSystem.read(this.getFilePath()));
    }

    static async find(accountName) {
        const account = new Account(accountName);

        try {
            await account.#load();
            return account;
        } catch (e) {
            return
        }

    }

    static async create(accountName) {
        const account = new Account(accountName);
        try {
            const res = FileSystem.write(account.getFilePath(), 0);
            CommandLine.print(res)

        } catch (error) {
            CommandLine.print(error.message)
        }
    }

}