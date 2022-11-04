let botaoIndividuo = document.getElementById('botaoIndividuo');
let mostrarIndividuo = document.getElementById('exibirIndividuo');
let exibeIndividuo = document.getElementById('exibe-individuo');

let magreza = [];
let saudavel = [];
let sobrepeso = [];
let obesidadeGrauI = [];
let obesidadeGrauII = [];
let obesidadeGrauIII = [];

function calculoImc() {
    let peso = document.getElementById('pesoIndividuo').value.trim();
    let altura = document.getElementById('alturaIndividuo').value.trim();
    let imc = peso / (altura ^ 2);

    return imc.toFixed(2);
}

function verificaImc() {
    let nome = document.getElementById('nomeIndividuo').value.trim();

    if (calculoImc() < 18.50) {
        magreza.push(nome);

    } if (calculoImc() >= 18.50 && calculoImc() < 25.0) {
        saudavel.push(nome);
    
    } if (calculoImc() >= 25.00 && calculoImc() < 30.00) {
        sobrepeso.push(nome);

    } if (calculoImc() >= 30.00 && calculoImc() < 35.00) {
        obesidadeGrauI.push(nome);

    } if (calculoImc() >= 35.00 && calculoImc() < 40.00) {
        obesidadeGrauII.push(nome);

    } if (calculoImc() >= 40.00) {
        obesidadeGrauIII.push(nome);
    }
}

function exibirIndividuo(){
    let opcao = document.getElementById('grau-obesidade').value;

    exibeIndividuo.innerHTML = "";  

    if (opcao == "magreza") {
        exibeIndividuo.innerHTML += `${magreza}, `;
    }
    if (opcao == "saudavel") {
        exibeIndividuo.innerHTML += `${saudavel}, `;
    }
    if (opcao == "sobrepeso") {
        exibeIndividuo.innerHTML += `${sobrepeso}, `;
    }
    if (opcao == "ogi") {
        exibeIndividuo.innerHTML += `${obesidadeGrauI}, `;
    }
    if (opcao == "ogii") {
        exibeIndividuo.innerHTML += `${obesidadeGrauII}, `;
    }
    if (opcao == "ogiii") {
        exibeIndividuo.innerHTML += `${obesidadeGrauIII}, `;
    }
}

mostrarIndividuo.addEventListener("click", exibirIndividuo);

botaoIndividuo.addEventListener("click", function () {
    return verificaImc();
})