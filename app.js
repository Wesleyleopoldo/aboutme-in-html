function aboutMe(){
    let exibirNaTela = document.getElementById('sobremimh3');

    exibirNaTela.innerHTML = "História"

    let exibirHistoria = document.getElementById('paragrafo_aboutme');

    exibirHistoria.innerHTML = "Meu nome é Wesley Cauan tenho 19 anos e sou estudante na aréa de T.I.<br> Moro na Cidade de Jaboatão dos Guararapes no Bairro de Cajueiro Seco sozinho em uma casa.";
}

function hobbies() {
    let exibirNaPraia = document.getElementById('praia');
    exibirNaPraia.innerHTML = "Ir a Praia";

    let exibirEstudar = document.getElementById('estudar');
    exibirEstudar.innerHTML = "Estudar";

    let exibirLer = document.getElementById('ler');
    exibirLer.innerHTML = "Ler Livros";

    let exibirViolao = document.getElementById('tocar_violao');
    exibirViolao.innerHTML = "Tocar Violão";

    let exibirCorrer = document.getElementById('correr');
    exibirCorrer.innerHTML = "Correr";
}

function projects() {
    let exibirNaPraia = document.getElementById('meus_projetos');
    exibirNaPraia.innerHTML = "Meu GitHub";
}