export class Ponto {
    private x: number = 0
    private y: number = 0

    constructor(x: number, y:number){
        this.x = x
        this.y = y
    }

    get pontoXget(){
        return this.x
    }

    get pontoYget(){
        return this.y
    }

    set pontoXset(x: number){
        this.x = x
    }

    set pontoYset(y: number){
        this.y = y
    }
}