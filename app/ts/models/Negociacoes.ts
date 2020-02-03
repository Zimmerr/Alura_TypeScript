import {Negociacao} from './Negociacao'

export class Negociacoes {

  private _negociacoes: Negociacao[] = [];
  //Alternativa:  private _negociacoes: Array<Negociacao> = [];

  adiciona(negociacao: Negociacao): void {
    this._negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {
    return [].concat(this._negociacoes);
  }
}