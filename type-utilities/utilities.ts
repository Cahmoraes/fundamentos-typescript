interface ErrorProps {
  statusCode: string
  code: number
  [key: string]: string | number | Function
  somar(a:number, b: number): number
}

const objError: ErrorProps = {
  statusCode: '200',
  code: 200,
  somar(a: number, b: number) {
    return a + b
  }
}