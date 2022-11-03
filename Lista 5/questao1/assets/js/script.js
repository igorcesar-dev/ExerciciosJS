
const botao = document.querySelector('.btn-verificar');
const mensagens = document.querySelector("#mensagens");
let incorretos = [];

let numAleatorio = Math.floor(Math.random() * 1000);

let chances = 3;

console.log(numAleatorio);

function verifica() {
    let numInserido = document.querySelector("#num-inserido").value.trim();
    const min = 1;
    const max = 1000;

    if (numInserido == "" || isNaN(numInserido) || numInserido.indexOf(".") != -1 || numInserido > max || numInserido < min) {
        alert("Palpite não informado ou inválido!");
    } else {

        if (parseInt(numInserido) == numAleatorio) {
            incorretos.sort((a, b) => {
                if (a > b) {
                    return -1;
                }
                if (a < b) {
                    return 1;
                }
                return 0;
            });

            mensagens.innerHTML += "Parabéns! Você acertou! <br>"
            alert(`Parabéns! Você acertou! Suas tentativas foram os números: ${incorretos}.`)

            mensagens.innerHTML = ``
            chances = 4;
            incorretos = [];



        } if (numInserido < numAleatorio) {
            chances -= 1;
            mensagens.innerHTML += `${numInserido} é um palpite incorreto (inferior ao número sorteado). Você tem mais ${chances} tentativas.<br>`
            incorretos.push(numInserido);
            console.log(incorretos);

            if (chances == 0) {
                mensagens.innerHTML = ``
                chances = 4;
                incorretos = [];
            }
        } if (numInserido > numAleatorio) {
            chances -= 1;
            mensagens.innerHTML += `${numInserido} é um palpite incorreto (superior ao número sorteado). Você tem mais ${chances} tentativas.<br>`
            incorretos.push(numInserido);
            console.log(incorretos);

            if (chances == 0) {
                mensagens.innerHTML = ``
                chances = 4;
                incorretos = [];
            }
        }
    }
}

botao.addEventListener("click", verifica);