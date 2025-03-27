function calcular(){
    // vamos criar 2 variaveis
    // Js as variaveis nao possuem tipo
    let mascote, homenagem, leite, kitAvulso, suplementoAvulso
    // recupera o valor do mascote digitado pelo usuario
    mascote = document.getElementById("mascote").value
    // recupera o valor da homenagem digitado pelo usuario
    homenagem = document.getElementById("homenagem").value
    // recupera a quanidade de  litros de leite
    leite = document.getElementById("leite").value
    // recuperar a quantidade avulsa de kits de alimentação
    kitAvulso = document.getElementById("kitAvulso").value
    // recuperar a quantidade avulsa de suplementos
    suplementoAvulso = document.getElementById("suplementoAvulso").value
    // calcular a soma
    let soma = Number(mascote) + Number(homenagem) + (2*Number(leite)) + (30*Number(kitAvulso)) + (15*Number(suplementoAvulso))
    //retorna o valor ao HTML
    document.getElementById("soma").innerHTML=`A soma é ${soma}`
}