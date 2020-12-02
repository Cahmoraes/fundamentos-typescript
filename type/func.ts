type Pessoa = {
  nome: string
  idade: number
}

type Genero = {
  sexo: 'masculino' | 'feminino'
}

const cidadao: Pessoa & Genero = {
  sexo: 'feminino',
  idade: 2,
  nome: 'c'
}