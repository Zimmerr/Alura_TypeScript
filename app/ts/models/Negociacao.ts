export class Negociacao {

  // declaração das propriedades de classe
  constructor(
    readonly data: Date, 
    readonly quantidade: number,  
    readonly valor: number) {}

  get volume() {
    return this.quantidade * this.valor;
  }
}