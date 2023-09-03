import { apagarDoLocalStorage, desenharProdutoCartSimples, lerLocalStorage, salvarLocalStorage } from "./src/utilidades";

function desenharProdutosCheckout(){
    const idsProdutosCartComQtd = lerLocalStorage('carrinho') ?? {};

    for(const idProduto in idsProdutosCartComQtd){
        desenharProdutoCartSimples(idProduto,'container-produtos-checkout',idsProdutosCartComQtd[idProduto]);
    }
}

function finalizarCompra(evento){
    evento.preventDefault();
    const idsProdutosCartComQtd = lerLocalStorage('carrinho') ?? {};
    if(Object.keys(idsProdutosCartComQtd).length === 0) {
        return;
    }

    const dataAtual = new Date();
    const pedidoFeito = { //Objeto dentro de um Objeto
        dataPedido: dataAtual,
        pedido: idsProdutosCartComQtd
    }

    const historicoDePedidos = lerLocalStorage('historico') ?? {};
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos]; //Lista dentro de uma Lista (... === spread(Espalhamento))
    
    salvarLocalStorage('historico', historicoDePedidosAtualizado)
    apagarDoLocalStorage('carrinho');
    window.location.href = window.location.origin + '/pedidos.html';
}

desenharProdutosCheckout();

document.addEventListener('submit', (evt) => finalizarCompra(evt));