function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;

    const descriptor: PropertyDescriptor = {
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(`${propertyName} should be at least ${length} chars`);
        }
        value = newValue;
      },
    };

    Object.defineProperty(target, propertyName, descriptor);
  };
}

class UserDef {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let user1 = new UserDef("4567");
console.log(user1.password);
