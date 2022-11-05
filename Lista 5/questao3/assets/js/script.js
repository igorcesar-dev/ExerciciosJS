let btnVerificar = document.getElementById('verificarPalindromo');

function verificaPalindromo() {
    let valor = document.getElementById('palindromo').value;
    let valorMinusculo = valor.toLowerCase();

    var re = /[\W_]/g;
    var valorFinal = valorMinusculo.replace(re, '');
    var valorFinalInvertido = valorFinal.split('').reverse().join('');
    
    if(valorFinalInvertido === valorFinal){
        alert("O texto informado repesenta um palíndromo!");
    } else {
        alert("O texto informado NÃO repesenta um palíndromo!");
    }
}


btnVerificar.addEventListener("click", verificaPalindromo);