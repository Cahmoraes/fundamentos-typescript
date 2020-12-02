interface Automovel {
  id: number
  tipo: 'carro' | 'moto'
  descricao: string
}

class Carro {
  public tipo: string
  public id: number
  constructor({ id, tipo }: Omit<Automovel, 'descricao'>) {
    this.id = id
    this.tipo = tipo
  }
}

const car = new Carro({
  id: 2,
  tipo: 'carro'
})

console.log(car)

function exibe<T>(arg: T): T {
  return arg
}

console.log(exibe<string>('caique'))
console.log(exibe<number>(2))

