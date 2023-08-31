import { catalogo } from "./utilidades";

function abrirCarrinho() {
    document.getElementById('carrinho').classList.add('right-[0]');
    document.getElementById('carrinho').classList.remove('right-[-360px]');
}

function fecharCarrinho() {
    document.getElementById('carrinho').classList.remove('right-[0]');
    document.getElementById('carrinho').classList.add('right-[-360px]');
}

export function inicializarCarrinho(){
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
    botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);
}

export function adicionarAoCarrinho(idProduto) {
    const produto = catalogo.find(p => p.id === idProduto);
    const conteinerProdutosCarrinho = document.getElementById('produtos-carrinho');
   
    const cartaoProdutoCarrinho = `<article class="flex relative bg-slate-200 rounded-lg p-1">
    <button class="absolute top-0 right-2" id="fechar-carrinho"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
    <img class="h-24 rounded-lg" src="./assets/img/${produto.imagem}" alt="Carrinho:${produto.nome}">
    <div class="py-2"> <!--py === padding na vertical & px === padding na horizontal -->
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
  </article>`

  conteinerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}