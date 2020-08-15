export class Parametros {
    public cConsumoCar : number;
    public valorCombustivel: number;
    public km: number;
    public lucro: number;
    public total: number;
    constructor(
        private cConsumoCar1 : number,
        private valorCombustivel1 : number,
        private km1 : number,
        private lucro1: number,
        private total1: number,
        ) 
    
        { 
            this.cConsumoCar = cConsumoCar1;

            this.valorCombustivel = valorCombustivel1;

            this.km = km1;
    
            this.lucro = lucro1;

            this.total = total1;
            // tslint:disable-next-line: no-unused-expression
        }


}