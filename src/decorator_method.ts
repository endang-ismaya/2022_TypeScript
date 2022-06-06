function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  console.log(target, methodName);
  const original = descriptor.value as Function;
  descriptor.value = function (message: string): void {
    console.log("Before");
    original.call(this, message);
    console.log("After");
  };
}

class Person3 {
  @Log
  say(message: string) {
    console.log(`Person3 says: ${message}`);
  }
}

let person3 = new Person3();
person3.say("Hello Person1");
