import { desenharProdutoCartSimples, lerLocalStorage } from "./src/utilidades";

function desenharProdutosCheckout(){
    const idsProdutosCartComQtd = lerLocalStorage('carrinho');

    for(const idProduto in idsProdutosCartComQtd){
        desenharProdutoCartSimples(idProduto,'container-produtos-checkout',idsProdutosCartComQtd[idProduto]);
    }
}

desenharProdutosCheckout();