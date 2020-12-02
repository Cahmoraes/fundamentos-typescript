interface Pessoa2 {
  nome: string
  idade: number
}

interface Animal {
  nome: string
  especie: string
}


const apresentar = <T extends Animal | Pessoa2 = any>(obj: T) => {
  if ((obj as any).especie) {
    console.log((obj as any).especie)
  }
  if ((obj as any).idade) {
    console.log((obj as any).idade)
  }
  if (!('idade' in obj)) {
    console.log((obj as any).idade)
  }
}

apresentar<Pessoa2>({ nome: 'bolt', idade: 26 })