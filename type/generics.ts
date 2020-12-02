function exibir<T extends string | number = string>(a: T, b: T) {
  console.log(a, b)
}

exibir<string>('2', '3')
exibir(5, 2)