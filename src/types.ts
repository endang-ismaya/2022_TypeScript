// type aliases
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: "Endang",
  retire: (date: Date) => console.log(date),
};

// Union Types
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  }

  return parseInt(weight) * 2.2;
}

// Intersection Types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 100;

// Null Types
function greet(name: string | null | undefined): void {
  if (name) console.log(name.toLocaleLowerCase());
  else console.log("Hola!");
}

greet("Endang");
greet(null);
greet(undefined);
