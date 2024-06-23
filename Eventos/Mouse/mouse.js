const card = document.querySelector('.card')

//adicionando evento de clique
card.addEventListener('click', ()=>{
    const eventosExp = document.querySelector('.lista-conteudos')
    eventosExp.classList.toggle("invisivel")    
})