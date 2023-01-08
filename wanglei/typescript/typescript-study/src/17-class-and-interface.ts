export {}

// interface EatAndRun {
//   eat(food: string): void
//   run(distance: number): void
// }

interface Eat {
  eat(food: string): void
}

interface Run {
  run(distance: number): void
}

class Person implements Eat, Run {
  eat(food: string): void {
    console.log(`吃${food}`)
  }
  run(distance: number): void {
    console.log(`跑${distance}`)
  }
}

class Animal implements Eat, Run {
  eat(food: string): void {
    console.log(`啃${food}`)
  }
  run(distance: number): void {
    console.log(`爬${distance}`)
  }
}
