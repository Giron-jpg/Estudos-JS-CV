function carregar(){
    var tempo = new Date()
    var hora = tempo.getHours()
    var min = tempo.getMinutes()
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('img')
    msg.innerHTML = `Agora são ${hora}:${min}`
    
    if(hora >= 5 && hora <= 12){
        img.src = 'imagens/amanhecer.png'
        document.body.style.background = '#f97a44bd'

    } else if(hora >= 12 && hora <= 16){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#acdbed'
    } else if(hora >= 16 && hora <= 19){
        img.src = 'imagens/anoitecer.png'
        document.body.style.background = '#a17971'
    } else if(hora >= 19 || hora <= 5){
        img.src = 'imagens/noite.png'
        document.body.style.background = '#183850'
    }
}



