export const catalogo = [
    { 
        id: '1', 
        marca: 'Zara', 
        nome: 'Camisa Larga com Bolsos', 
        preco: 70, 
        imagem: 'product-1.jpg', 
        feminino: false, 
    }, 
    { 
        id: '2', 
        marca: 'Zara', 
        nome: 'Casaco Reto com Lã', 
        preco: 85, 
        imagem: 'product-2.jpg', 
        feminino: true, 
    }, 
    { 
        id: '3', 
        marca: 'Zara', 
        nome: 'Jaqueta com Efeito Camurça', 
        preco: 60, 
        imagem: 'product-3.jpg', 
        feminino: false, 
    },
    { 
        id: '4', 
        marca: 'Zara', 
        nome: 'Sobretudo em Mescla de Lã', 
        preco: 160, 
        imagem: 'product-4.jpg', 
        feminino: false, 
    },
    { 
        id: '5', 
        marca: 'Zara', 
        nome: 'Camisa Larga Acolchoada de Veludo Cotelê', 
        preco: 110, 
        imagem: 'product-5.jpg', 
        feminino: false,
    }, 
    { 
        id: '6', 
        marca: 'Zara', 
        nome: 'Casaco de Lã com Botões', 
        preco: 170, 
        imagem: 'product-6.jpg', 
        feminino: true, }, 
    { 
        id: '7', 
        marca: 'Zara', 
        nome: 'Casaco com Botões', 
        preco: 75, 
        imagem: 'product-7.jpg', 
        feminino: true, 
    }, 
    { 
        id: '8', 
        marca: 'Zara', 
        nome: 'Colete Comprido com Cinto', 
        preco: 88, 
        imagem: 'product-8.jpg', 
        feminino: true, 
    },
    { 
        id: '9', 
        marca: 'Zara', 
        nome: 'Vestido azul forte com flores', 
        preco: 112, 
        imagem: 'product-9.jpg', 
        feminino: true, 
    },
    { 
        id: '10', 
        marca: 'Zara', 
        nome: 'Saia azul quadriculada, com blusa preta', 
        preco: 120, 
        imagem: 'product-10.jpg', 
        feminino: true, 
    },
    { 
        id: '11', 
        marca: 'Zara', 
        nome: 'Blusa preta e saia preta com cinto e-girl', 
        preco: 160, 
        imagem: 'product-11.jpg', 
        feminino: true, 
    },
    { 
        id: '12', 
        marca: 'Zara', 
        nome: 'Camisa social branca com calça social', 
        preco: 90, 
        imagem: 'product-12.jpg', 
        feminino: false, 
    },
    { 
        id: '13', 
        marca: 'Zara', 
        nome: 'Kit casaco e calça preto', 
        preco: 159, 
        imagem: 'product-13.jpg', 
        feminino: false, 
    },
    { 
        id: '14', 
        marca: 'Zara', 
        nome: 'Camisa social branca e calça social azul', 
        preco: 199, 
        imagem: 'product-14.jpg', 
        feminino: false, 
    },
];

export function salvarLocalStorage(chave, informacao){
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function apagarDoLocalStorage(chave){
    localStorage.removeItem(chave);
}

export function lerLocalStorage(chave){
    return JSON.parse(localStorage.getItem(chave));
}

export function desenharProdutoCartSimples(idProduto,idContainerHtml, qtdProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const conteinerProdutosCarrinho = document.getElementById(idContainerHtml);
    const elementoArticle = document.createElement("article"); //<article></article>
    const articleClasses = ['flex', 'bg-stone-200', 'rounded-lg', 'p-1', 'relative', 'mb-2', 'w-96'];
    
    for(const aticleClass of articleClasses){
      elementoArticle.classList.add(aticleClass);
     
      const cartaoProdutoCarrinho = `<img class="h-24 rounded-lg" src="./assets/img/${produto.imagem}" alt="Carrinho:${produto.nome}">
          <div class="p-2 flex flex-col justify-between"> <!--py === padding na vertical & px === padding na horizontal -->
            <p class="text-slate-900 text-sm">${produto.nome}</p>
            <p class="text-slate-400 text-xs">Tamanho: M</p>
            <p class="text-green-700 text-lg">$${produto.preco}</p>
          </div>
          <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
            <p class="ml-2" id='quantidade-${produto.id}'>${qtdProduto}</p>
          </div>
        `;
        elementoArticle.innerHTML = cartaoProdutoCarrinho;
        conteinerProdutosCarrinho.appendChild(elementoArticle);
    }
  
 }
  