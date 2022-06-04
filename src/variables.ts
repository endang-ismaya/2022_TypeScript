let sales: number = 123456789;
let course: string = "TypeScript";
let is_published: boolean = true;
let level;

// arrays
let numbers: number[] = [1, 2, 3];

// tuple
let user: [number, string] = [1, "Endang"];
user.push(1);
console.log(user);

// enum
enum Size {
  Small = 0,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// function
function calculateTax(income: number, taxYear: number = 2022): number {
  if ((taxYear || 2022) < 2022) return income * 0.2 + income;
  return income * 0.5 + income;
}

console.log(calculateTax(20_000));

// Objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Endang",
  retire: (date: Date) => {
    console.log(date);
  },
};
