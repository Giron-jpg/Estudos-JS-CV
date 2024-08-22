function contar(){
    let ini = document.getElementById('iinicio')
    let pas = document.getElementById('ipasso')
    let fim = document.getElementById('ifim')
    let res = document.getElementById('res')
    res.innerHTML = ''
    if(ini.value.length==0 || pas.value.length==0 || fim.value.length == 0){
        alert('Verifique se os dados foram inseridos corretamente.')
    }else{
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let p = Number(pas.value)
        let f = Number(fim.value)

        if(i < f){
            for(let c = i; c <=f; c += p){
                res.innerHTML += ` ${c} \u{1F449}` 
            }
            res.innerHTML += `\u{1F3C1}`
        }else{
            for(let c = f; c <= i; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
        
    }
}