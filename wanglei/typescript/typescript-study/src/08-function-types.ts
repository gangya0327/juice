export {}

function func1(a: number, b?: string): string {
  return 'func1'
}

func1(100)

func1(100, 'abc')

func1(100, 200, 300)
