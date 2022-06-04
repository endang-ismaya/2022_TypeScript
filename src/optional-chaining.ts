// Optional Chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional call
let log: any = null;
log?.("a");

// nullish coalescing operator
let speed: number | null = null;
let ride = {
  speed: speed ?? 30,
};

// type assertions

// unknown
function render(document: unknown) {
  // narrowing
  if (typeof document == "string") {
    console.log(document.toLocaleLowerCase());
  }
}

// never
function processEvents(): never {
  while (true) {
    // read a message from a queue
  }
}

processEvents();
// console.log("Never get here!");
