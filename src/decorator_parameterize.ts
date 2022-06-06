type ComponentOptions = {
  selector: string;
};

function ComponentNumber(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

function Pipe(constructor: Function) {
  console.log("Pipe Decorator Called");
  constructor.prototype.Pipe = true;
}

@ComponentNumber({ selector: "#my-profile" })
@Pipe
class ProfileComponent2 {}
