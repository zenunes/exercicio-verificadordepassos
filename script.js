function verificar(){
    var valorInicial = document.querySelector('#inicio')
    var valorFim = document.querySelector('#fim')
    var passoDado = document.querySelector('#passos')
    var res = document.querySelector('.res')

    

    if (valorInicial.value.length == 0 || valorFim.value.length == 0 || passoDado.value.length == 0 ){
        window.alert("[ERRO] campo vazio! por favor insira algum número")
    } else{
        res.innerHTML = ("Contando:")
        let inicio = Number(valorInicial.value)
        let fim = Number(valorFim.value)
        let passo = Number(passoDado.value)

        for( let contador = inicio; contador <= fim; contador+= passo ){
            res.innerHTML += ` ${contador}`
        }
    }

    

    
}
