class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  protected walk() {
    console.log("Walking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    this.walk();
    console.log("Taking a Test");
  }
}

let student = new Student(1, "Endang", "Ismaya");

// Override Method
class Teacher extends Person {
  override get fullName() {
    return `Professor ${super.fullName}`;
  }
}

let teacher = new Teacher("Aldeind", "Yussuf");

// Polymorphism
function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([student, teacher]);
