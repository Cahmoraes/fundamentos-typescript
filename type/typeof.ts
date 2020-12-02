interface Person {
  name: string
  age: number
  id: number
}

const p: Person = {
  name: 'caique',
  age: 22,
  id: 2
}

type Stringfy<T> = {
  [P in keyof T]: string
}

const p2: Stringfy<Person> = {
  name: 'caique',
  age: '22',
  id: '3'
}

const p3: Partial<Person> = {
  name: 'caique'
}

const p4ReadOnly: Readonly<Person> = {
  age: 23,
  id: 2,
  name: 'caique'
}