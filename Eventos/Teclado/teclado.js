const campoKeyUp = document.querySelector("#campo-keyup");
const campoKeyDown = document.querySelector("#campo-keydown")
//cria um big array com todos os produtos que tem a classe produto em seu css
const produtos = document.querySelectorAll('.produto')
 
//quando soltar a tecla...
//função para capturar o soltar da tecla
campoKeyUp.addEventListener("keyup", ()=>{
    const valorCampo = campoKeyUp.value.toLowerCase()
    const tamanhoCampo = valorCampo.length
 
    for(let i = 0; i < produtos.length; i++){
        let valorProduto = produtos[i].textContent.toLowerCase()
        //substring corta no tamanho q vc quer
        valorProduto = valorProduto.substring(0, tamanhoCampo)
        if(valorCampo != valorProduto){
            produtos[i].classList.add("invisivel");
        }else{
            produtos[i].classList.remove("invisivel")
        }
 
    }
})

// keydown
const campoKeydown = document.querySelector("#campo-keydown")
// Adicionando o Listener para o keydown
campoKeydown.addEventListener("keydown",(event)=>{
    console.log(event.key)
})

const card = document.querySelector('.card')

//adicionando evento de clique
card.addEventListener('click', ()=>{
    const eventosExp = document.querySelector('.lista-conteudos')
    eventosExp.classList.toggle("invisivel")    
})
 
 



