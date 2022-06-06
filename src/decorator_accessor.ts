function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(target, methodName);
  const original = descriptor.get;

  descriptor.get = function () {
    const result = original?.call(this);

    if (typeof result == "string") {
      return result.toUpperCase();
    }

    return result;
  };
}

class Person4 {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person4 = new Person4("endang", "ismaya");
console.log(person4.fullName);
