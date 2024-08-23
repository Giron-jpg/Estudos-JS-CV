function tabuada(){
    let res = document.getElementById('seltab')
    let num = document.getElementById('numero')
    
    if(num.value.lenght == 0){
        window.alert('Digite um valor!')
    }else{
        let n = Number(num.value)
        res.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${(c*n)}`
            item.value = `tab${c}`
            res.appendChild(item)
        }
    }
}