import { salvarLocalStorage, catalogo, lerLocalStorage } from "./utilidades";

const idsProdutosCartComQtd = lerLocalStorage('carrinho') ?? {};

function abrirCarrinho() {
  document.getElementById('carrinho').classList.add('right-[0]');
  document.getElementById('carrinho').classList.remove('right-[-360px]');
};

function fecharCarrinho() {
  document.getElementById('carrinho').classList.remove('right-[0]');
  document.getElementById('carrinho').classList.add('right-[-360px]');
};

function irParaCheckout(){
  if(Object.keys(idsProdutosCartComQtd).length === 0){
    return;
  }
  window.location.href = window.location.origin + "/checkout.html";
}

export function inicializarCarrinho(){
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");
  const botaoIrParaCheckout = document.getElementById('finalizar-compra');

  botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
  botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);
  botaoIrParaCheckout.addEventListener('click', irParaCheckout);
};

function removerDoCarrinho(idProduto){
  delete idsProdutosCartComQtd[idProduto];
  salvarLocalStorage('carrinho',idsProdutosCartComQtd);
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho();
}

function incrementarQtdProduto(idProduto) {
  idsProdutosCartComQtd[idProduto]++;
  salvarLocalStorage('carrinho',idsProdutosCartComQtd);
  atualizarPrecoCarrinho();
  atualizarInformacaoQtd(idProduto);
}

function decrementarQtdProduto(idProduto) {
  if(idsProdutosCartComQtd[idProduto] === 1){
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutosCartComQtd[idProduto]--;
  salvarLocalStorage('carrinho',idsProdutosCartComQtd);
  atualizarPrecoCarrinho();
  atualizarInformacaoQtd(idProduto);
}

function atualizarInformacaoQtd(idProduto){
  document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutosCartComQtd[idProduto];
}

function desenharProdutoNoCart(idProduto) {
  const produto = catalogo.find(p => p.id === idProduto);
  const conteinerProdutosCarrinho = document.getElementById('produtos-carrinho');
  const elementoArticle = document.createElement("article"); //<article></article>
  const articleClasses = ['flex', 'bg-slate-100', 'rounded-lg', 'p-1', 'relative'];
  
  for(const aticleClass of articleClasses){
    elementoArticle.classList.add(aticleClass);
  }

  const cartaoProdutoCarrinho = `<button class="absolute top-0 right-2" id="remover-item-${produto.id}"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"></i></button>
      <img class="h-24 rounded-lg" src="./assets/img/${produto.imagem}" alt="Carrinho:${produto.nome}">
      <div class="p-2 flex flex-col justify-between"> <!--py === padding na vertical & px === padding na horizontal -->
        <p class="text-slate-900 text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
      </div>
      <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
        <button id="decrementarProduto-${produto.id}">-</button>
        <p class="ml-2" id='quantidade-${produto.id}'>${idsProdutosCartComQtd[produto.id]}</p>
        <button id='incrementarProduto-${produto.id}' class="ml-2">+</button>
      </div>
    `;
  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  conteinerProdutosCarrinho.appendChild(elementoArticle);

  document.getElementById(`decrementarProduto-${produto.id}`).addEventListener('click', () => decrementarQtdProduto(produto.id));
  document.getElementById(`incrementarProduto-${produto.id}`).addEventListener('click', () => incrementarQtdProduto(produto.id));
  document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removerDoCarrinho(produto.id));
}

export function renderizarProdutosCarrinho(){
  const conteinerProdutosCarrinho = document.getElementById('produtos-carrinho');
  conteinerProdutosCarrinho.innerHTML = " ";
  
  for(const idProduto in idsProdutosCartComQtd){
    desenharProdutoNoCart(idProduto);
  }
}

export function adicionarAoCarrinho(idProduto) {
  if(idProduto in idsProdutosCartComQtd){ //O in significa existe dentro
    incrementarQtdProduto(idProduto);
    return;
  }
  idsProdutosCartComQtd[idProduto] = 1;
  atualizarPrecoCarrinho();
  salvarLocalStorage('carrinho',idsProdutosCartComQtd);
  desenharProdutoNoCart(idProduto);
}

export function atualizarPrecoCarrinho(){
  const precoCarrinho = document.getElementById('preco-total');
  let precoTotalCarrinho = 0;
  for(const idProdutoNoCarrinho in idsProdutosCartComQtd){
    precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * idsProdutosCartComQtd[idProdutoNoCarrinho];
  }
  precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;
}