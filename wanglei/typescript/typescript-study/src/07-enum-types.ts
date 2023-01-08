export {}

// const PostStatus = {
//   Draft: 0,
//   Unpublished: 1,
//   Published: 2
// }

// enum PostStatus {
//   Draft = 9,
//   Unpublished,
//   Published
// }

const enum PostStatus {
  Draft = 'a',
  Unpublished = 'b',
  Published = 2
}

const post = {
  title: 'Title',
  content: 'TypeScript is a good language',
  status: PostStatus.Draft
}
