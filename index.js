const itens = [];
const quantidade =[];


function adicionarItem(nomeDoProduto, qtd){
    itens.push(nomeDoProduto);
    quantidade.push(qtd);
   
}

function removerItem(nomeDoProduto){
    const index  =  itens.indexOf(nomeDoProduto);
    index > -1 ? itens.splice(index, 1) && quantidade.splice(index,1) : 'produto não encontrado';

}


function listaItens(){
    for(let i = 0; i < itens.length ; i++){
        console.log(` Produto :${itens[i]} | Quantidade:${quantidade[i]}`);
    }
}

adicionarItem('🍎', 2);
adicionarItem('🍌', 6);
adicionarItem('🍇', 10);
listaItens();

console.log('-----------------');

removerItem('🍌')

listaItens();

