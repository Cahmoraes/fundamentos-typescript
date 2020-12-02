interface Person {
  name: string
  age: number
}

type Stringfy2<T> = {
  [p in keyof T]: string
}

type car = {
  name: string
  ano: number
}

type automovel = {
  marca: string
}

const ferrari: car & automovel = {
  ano: 23,
  name: 'caiuqe',
  marca: 'ferrari'
}
