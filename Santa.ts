export class Santa {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public print(): void {
    console.log(this.name.toLocaleUpperCase() + ", of age: " + this.age);
  }
}
