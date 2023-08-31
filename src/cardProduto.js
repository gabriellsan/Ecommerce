import { catalogo } from "./utilidades";

export function renderizarCatalogo(){
    for(const produtoCatalogo of catalogo){
        const cartaoProduto = `<div class='div-main-card border-solid border-2 border-sky-500 w-48 m-2' id="card-produto-${produtoCatalogo.id}">
        <img 
            src="./assets/img/${produtoCatalogo.imagem}" 
            alt="Produto 1 do Ecommerce" 
            style="height:300px"
        />
        <p class="marca">${produtoCatalogo.marca}</p>
        <p>${produtoCatalogo.nome}</p>
        <p>$${produtoCatalogo.preco}</p>
        <button>Add</button>
        </div>`;
    
        document.getElementById("container-produto").innerHTML += cartaoProduto;
    }
}