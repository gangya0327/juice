export {}

abstract class Animal {
  eat(food: string): void {
    console.log(`吃${food}`)
  }

  abstract run(distance: number): void
}

class Dog extends Animal {
  run(distance: number): void {
    console.log(`跑${distance}`)
  }
}

const dog = new Dog()
dog.eat('aaa')
dog.run(12)
