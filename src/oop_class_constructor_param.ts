class Account2 {
  nickname?: string; // optional properties

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount!");
    }

    this._balance = amount;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(amount: number) {
    if (amount <= 0) {
      throw new Error("Invalid amount!");
    }

    this._balance = amount;
  }
}

let account2 = new Account2(1, "Endang", 0);
account2.balance = 100;
console.log(account2.balance);
