export {}

interface Post {
  title: string
  content: string
  subtitle?: string // 可选成员
  readonly summary: string // 只读成员
}

function printPost(post: Post) {
  console.log(post.title)
  console.log(post.content)
}

interface Cache {
  [prop: string]: string // 动态成员
}

const cache: Cache = {}
cache.foo = 'afa'
cache.bar = 123
