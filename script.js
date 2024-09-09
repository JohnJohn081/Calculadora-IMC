document.getElementById('calcular').addEventListener('click', function(){

    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var resultado = peso / (altura * altura)
    var elementResultado = document.getElementById('resultado')
    elementResultado.innerHTML = ''

    
    if(resultado < 18.5){
        elementResultado.innerHTML += ` Você está abaixo do peso pae, bora comer uma massinha boa`
        console.log('Abaixo do peso')
    }
    else if (resultado > 18.5 && resultado < 24.9){
        elementResultado.innerHTML += ` Você tá no peso ideal pae, slk brabo dms continue assim 🦾`
        console.log('Peso normal')
    }
    else if (resultado > 25 && resultado < 29.9){
        elementResultado.innerHTML += ` Bixo, ta ficando gordinho em pae, bora cuidar porque já é Sobrepeso!`
        console.log('Sobrepeso')
    }
    else if(resultado > 30){
        elementResultado.innerHTML += ` Rapaz, ta cresendo dms, só que é para os lados, bora se cuidar já é Obesidade!`
        console.log('Obesidade')
    }
    console.log(altura, peso)
    console.log(resultado)
})

document.getElementById('limpar').addEventListener('click', function(){
    var elementResultado = document.getElementById('resultado')
    elementResultado.innerHTML = ''

})