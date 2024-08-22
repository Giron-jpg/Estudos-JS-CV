function calcula(){
    var tempo = new Date()
    var ano = tempo.getFullYear()
    var nasc = window.document.querySelector('input#ano')
    var msg = window.document.querySelector('div#msg')
    var sex = window.document.getElementsByName('sexo')
    var img = window.document.createElement('img')
    img.setAttribute('id','foto')
    if(nasc.value.length == 0 || nasc.value > ano){
        alert('Verifique os dados e tente novamente')
    } else{
        var genero = ''
        var idade = ano - nasc.value
        if(sex[0].checked){
            genero = 'um Homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'imagens/menino.png')
            } else if(idade < 21){
                img.setAttribute('src', 'imagens/garoto.png')
            } else if(idade < 55){
                img.src = 'imagens/homem.png'
            } else {
                img.src = 'imagens/velho.png'
            }
        }else if(sex[1].checked){
            genero = 'uma Mulher'
            if(idade >= 0 && idade <= 10){
                img.src = 'imagens/menina.png'
            } else if(idade < 21){
                img.src = 'imagens/garota.png'
            } else if(idade < 55){
                img.src = 'imagens/mulher.png'
            } else {
                img.src = 'imagens/velha.png'
            }
        }
        msg.innerHTML = `Detectou-se ${genero} de ${idade} anos`
        msg.appendChild(img)
    }
    
    
}



