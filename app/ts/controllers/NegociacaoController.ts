class NegociacaoController {

  private _inputData: JQuery;
  private _inputQuantidade: JQuery;
  private _inputValor: JQuery;
  // private _negociacoes: Negociacoes = new Negociacoes();
  // Nao precisa de declaração explicita pois ele infere o tipo
  private _negociacoes = new Negociacoes();

  private _negociacoesView = new NegociacoesView('#negociacoesView');
  private _mensagemView = new MensagemView('#mensagemView');


  constructor() {
    this._inputData = <JQuery>$('#data');
    this._inputQuantidade = <JQuery>$('#quantidade');
    this._inputValor = <JQuery>$('#valor');
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event): void {
    event.preventDefault();

    const negociacao = new Negociacao(
      new Date(this._inputData.val().replace(/-/g, '/')),
      parseInt(this._inputQuantidade.val()),
      parseFloat(this._inputValor.val()));

    this._negociacoes.adiciona(negociacao);

    this._negociacoesView.update(this._negociacoes);

    this._mensagemView.update('Negociação adicionada com sucesso');

  }
}