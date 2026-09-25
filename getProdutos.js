export default async function getProdutos() {
    const url = 'https://fakestoreapi.com/products/'
    const res = await fetch(url)
    const dados = await res.json()
    return dados
}
