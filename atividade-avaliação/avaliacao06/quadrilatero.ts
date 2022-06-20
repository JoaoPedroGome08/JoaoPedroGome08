import { Ponto } from './ponto'
export class Quadrilatero {
    private pointA: Ponto
    private pointB: Ponto

    constructor(pointA: Ponto, pointB: Ponto) {
        this.pointA = pointA
        this.pointB = pointB
    }

    verificarDentro(ponto: Ponto): boolean{
        if(this.pointA.pontoXget <= ponto.pontoXget && ponto.pontoXget <= this.pointB.pontoXget
             && this.pointB.pontoYget <= ponto.pontoYget && ponto.pontoYget <= this.pointA.pontoYget) {
                 return true
             } else {
                 return false
             }
    }
}