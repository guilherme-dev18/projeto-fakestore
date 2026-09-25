import getProdutos from "./getProdutos.js"
const cards = document.querySelector('.alocacao')

// estrutura de um card para referência visual
/* <div class="card">
    <h2>Nome do produto</h2>
    <p>Descrição do produto</p>
    <span>R$ 99,90</span>
    <div class="card-buttons">
        <button>Comprar</button>
        <button>Adicionar ao carrinho</button>
    </div>
</div> */

const exibirProdutos = (item) => {
    // div dos cards
    let divCards = document.createElement('div')
    divCards.className = 'card'

    // categoria dos produtos
    let categoria = document.createElement('span')
    categoria.innerText = item.category

    // imagem do produto
    let img = document.createElement('img')
    img.setAttribute('src', item.image)
    
    // titulo do produto
    let h2 = document.createElement('h2')
    h2.innerText = item.title

    // avaliação
    let avaliacao = document.createElement('div')
    avaliacao.className = 'avaliacao'
    avaliacao.innerText = `⭐ ${item.rating.rate} (${item.rating.count} avaliações)`

    // descrição do produto
    let descricao = document.createElement('p')
    descricao.innerText = item.description

    // preço do produto
    let preco = document.createElement('span')
    preco.innerText = `R$: ${item.price}`

    // div dos buttons de comprar
    let divButtons = document.createElement('div')
    divButtons.className = 'buttons'

    // botão de adicionar ao carrinho 
    let addAoCarrinho = document.createElement('a')
    addAoCarrinho.innerText = 'Adicionar ao carrinho'

    // botão de comprar
    let comprar = document.createElement('a')
    comprar.innerText = 'Comprar'

    divButtons.append(addAoCarrinho, comprar)
    divCards.append(categoria, img, h2, avaliacao,descricao, preco, divButtons)

    return divCards
}

const mostrarProdutos = async () => {
    const produtosDaApi = await getProdutos()

    for(let produto of produtosDaApi){
        cards.append(exibirProdutos(produto))
    }
}

mostrarProdutos()