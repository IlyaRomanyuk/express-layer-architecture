const Component = (id: number) => {
  console.log('init Component');

  return (target: Function) => {
    console.log('run Component');
    target.prototype.id = id;
  };
};

const Logger = () => {
  console.log('init Logger');

  return (target: Function) => {
    console.log('run Logger');
  };
};

const Method = (target: Object, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
  console.log('init Method');

  propertyDescriptor.value = function (...args: any[]) {
    return args[0] * 10;
  };
};

const Prop = (target: Object, propertyKey: string) => {
  console.log('init Prop');
};

const Param = (target: Object, propertyKey: string, index: number) => {
  console.log('init Param');
};

@Logger()
@Component(15)
export class User {
  @Prop
  public id: number;

  @Method
  public setId(@Param newId: number) {
    this.id = newId;
    return this.id;
  }
}

const user = new User();

console.log(user.id, user.setId(3));
