const FileSystem = require("./FileSystem.js");

describe('Deposit', ()=>{
    test('This adds money to the account', async () => {
        jest.spyOn(FileSystem, 'write').mockReturnValue('1')
        console.log(FileSystem.write('skdj'))
    })
})

describe('Withdraw', ()=>{
    test('This withdraws money from the account', async () => {})
})