function executarTudo(){
    somarOsDoisNumerosDosInputsMelhorada()
}

function somarOsDoisNumerosDosInputsMelhorada(){
    const valor01 = Number(document.getElementById("input_01_ex01").value)
    const valor02 = Number(document.getElementById("input_02_ex01").value)

    const resultadoSoma = somarDoisNumeros(valor01, valor02)

    mostrarResultadoEmUmElemento("elResultadoSoma", resultadoSoma)
}

function somarDoisNumeros(num1, num2) {
    return num1 + num2
}

function mostrarResultadoEmUmElemento(idElemento, valorASerMostrado) {
    document.getElementById(idElemento).innerHTML = valorASerMostrado
}

