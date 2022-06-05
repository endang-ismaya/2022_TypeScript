function echo<T extends number | string>(value: T): T {
  return value;
}

echo("Endang");

class Person1 {
  constructor(public name: string) {}
}

class Costumer extends Person1 {}

function echo1<T extends Person1>(value: T): T {
  return value;
}

echo1(new Person1("Endang"));
