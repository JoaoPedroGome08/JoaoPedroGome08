import { Ponto } from "./ponto"
import { Quadrilatero } from "./quadrilatero"

let pointA = new Ponto(0, 8)
let pointB = new Ponto(10, 0)

let pointC = new Ponto(4, 3)
let pointD = new Ponto(10, 5)
let pointE = new Ponto(11, 6)

let Verificar = new Quadrilatero(pointA, pointB)

console.log(Verificar.verificarDentro(pointC)? "Ponto C está dentro do Quadrilátero": "Ponto C não está dentro do Quadrilátero")
console.log(Verificar.verificarDentro(pointD)? "Ponto D está dentro do Quadrilátero": "Ponto D não está dentro do Quadrilátero")
console.log(Verificar.verificarDentro(pointE)? "Ponto E está dentro do Quadrilátero": "Ponto E não está dentro do Quadrilátero")