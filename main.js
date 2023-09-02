import { renderizarCatalogo } from "./src/cardProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo";
import { inicializarCarrinho, renderizarProdutosCarrinho, atualizarPrecoCarrinho } from "./src/menuCarrinho";

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();

