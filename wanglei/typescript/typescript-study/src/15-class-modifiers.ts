export {}

class Person {
  public name: string // 公共属性
  private age: number // 私有属性
  protected readonly gender: boolean

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }

  sayHi(msg: string): void {
    console.log(`I am ${this.name}, ${msg}`)
  }
}

const tom = new Person('Tom', 20)
console.log(tom.name)
// console.log(tom.age)
// console.log(tom.gender)

class Student extends Person {
  private constructor(name: string, age: number) {
    super(name, age)
    console.log(this.gender)
  }

  static create(name: string, age: number) {
    return new Student(name, age)
  }
}

// const jack = new Student('Jack', 23)
const jack = Student.create('Jack', 23)
