class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string; // optional properties

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount!");
    }

    this._balance = amount;
  }

  // private calculateTax() {
  //   console.log("Tax");
  // }

  getBalance(): number {
    return this._balance;
  }
}

let account1 = new Account(1, "Endang", 0);
account1.deposit(100);
console.log(account1.getBalance());
