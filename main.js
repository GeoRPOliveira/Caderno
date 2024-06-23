//Capturando aba EVENTOS
const eventos = document.querySelector('#eventos')

//adicionando evento de clique
eventos.addEventListener('click', ()=>{
    const eventosExp = document.querySelector('#conteudos-eventos')
    eventosExp.classList.toggle("invisivel")    
})