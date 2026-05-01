import FileSystem from "./FileSystem";
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


   async #load() {
        this.#balance = await FileSystem.read(this.getFilePath)
       
    }

    async static find(accountName) {

        const account = new Account(accountName);
        await account.#load();

    }



}