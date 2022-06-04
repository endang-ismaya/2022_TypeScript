class Account {
  readonly id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount!");
    }

    this.balance = amount;
  }
}

let account1 = new Account(1, "Endang", 0);
account1.deposit(100);
console.log(account1.balance);
