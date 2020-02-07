import { NegociacaoParcial, Negociacao } from '../models/index';

export class NegociacaoService {

    obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {

        return fetch('http://localhsost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => 
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err =>{
                console.log(err);
                throw new Error("Não foi possivel importar as negociacoes")
            });

    }
}

export interface HandlerFunction {

  (res: Response): Response
}