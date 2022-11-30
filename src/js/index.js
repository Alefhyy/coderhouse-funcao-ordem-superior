const lojaDeTenis = [
    {
        nome: 'Blazer',
        preco: 719.99,
        marca: 'Nike'
    },
    {
        nome: 'NMD',
        preco: 699.99,
        marca: 'Adidas'
    },
    {
        nome: 'Old Skool',
        preco: 369.99,
        marca: 'Vans'
    },
    {
        nome: 'Air Force',
        preco: 799.99,
        marca: 'Nike'
    },
    {
        nome: 'Slip-on',
        preco: 299.99,
        marca: 'Vans'
    },
    {
        nome: 'Incinerate',
        preco: 199.90,
        marca: 'Puma'
    },
    {
        nome: 'Ultraboost',
        preco: 1199.99,
        marca: 'Adidas'
    },
    {
        nome: 'Superstar',
        preco: 329.99,
        marca: 'Adidas'
    },
    {
        nome: 'Flyer Runner',
        preco: 279.99,
        marca: 'Puma'
    },
    {
        nome: 'Ozelia',
        preco: 449.99,
        marca: 'Adidas'
    },
    {
      nome: 'Smash',
      preco: 219.99,
      marca: 'Puma' 
    },
    {
        nome: 'Extent Nitro',
        preco: 999.99,
        marca: 'Puma'
    },
]  

for (const tenis of lojaDeTenis){
    console.log('Tenis: ' + tenis.nome + ', Preço: ' + tenis.preco + ', Marca: ' + tenis.marca)
}

const estoque = lojaDeTenis.filter((tenis) => {
    return (tenis.preco >= 200) && (tenis.preco <= 300)
})
console.log(estoque)



const tenisEmEstoque = []
lojaDeTenis.forEach((tenis) => {
    if((tenis.preco >= 300) && (tenis.preco <= 500)) {
        tenisEmEstoque.push(tenis)
    }
})
console.log(tenisEmEstoque)



lojaDeTenis.sort((a,b)=> {
    return a.preco - b.preco
})
console.table(lojaDeTenis)
