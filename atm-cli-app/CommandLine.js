const createInterface = require('readline').createInterface

module.exports = class CommandLine {
    static ask(question) {
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout
        })

        return new Promise(resolve => {
            rl.question(question, answer => {
                resolve(answer)
                rl.close();
            })

        })
    }

    static print(text) {
        console.log(text)
    }
}