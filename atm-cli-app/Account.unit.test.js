const FileSystem = require("./FileSystem");
const Account = require("./Account");

beforeEach(() => {
  jest.restoreAllMocks();
});
describe("Deposit", () => {
  test("This adds money to the account", async () => {
    const startingBalance = 5;
    const account = await createAccount("Emad", startingBalance);
    const amount = 100;
    const spy = jest
      .spyOn(FileSystem, "write")
      .mockReturnValue(Promise.resolve());

    await account.deposit(amount);
    expect(account.balance).toBe(amount + startingBalance);
    expect(spy).toHaveBeenCalledWith(
      account.filePath,
      amount + startingBalance,
    );
  });

  test("test", () => {
    const spy = jest.spyOn(FileSystem, "write");
    expect(spy).not.toHaveBeenCalled();
  });
});

describe("Withdraw", () => {
  test("This withdraws money from the account", async () => {
    const startingBalance = 10;
    const account = await createAccount("Emad", startingBalance);
    const amount = 5;
    const spy = jest
      .spyOn(FileSystem, "write")
      .mockReturnValue(Promise.resolve());

    await account.withdraw(amount);
    expect(account.balance).toBe(startingBalance - amount);
    expect(spy).toHaveBeenCalledWith(
      account.filePath,
      startingBalance - amount,
    );
  });
});

describe("with insuficient balance", () => {
  test("expected error for balance", async () => {
    const startingBalance = 5;
    const account = await createAccount("Emad", startingBalance);
    const amount = 10;
    const spy = jest.spyOn(FileSystem, "write");

    await expect(account.withdraw(amount)).rejects.toThrow();
    expect(account.balance).toBe(startingBalance);
    expect(spy).not.toHaveBeenCalled();
  });
});

async function createAccount(name, balance) {
  const spy = await jest
    .spyOn(FileSystem, "read")
    .mockReturnValueOnce(Promise.resolve(balance));
  const account = await Account.find(name);

  spy.mockRestore();
  return account;
}