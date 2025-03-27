function calcular(){
    // vamos criar 2 variaveis
    // Js as variaveis nao possuem tipo
    let mascote, homenagem
    // recupera o valor do mascote digitado pelo usuario
    mascote = document.getElementById("mascote").value
    alert("mascote")
    // recupera o valor da homenagem digitado pelo usuario
    homenagem = document.getElementById("homenagem").value
    alert("homenagem")
    // calcular a some
    let soma = Number(mascote) + Number(homenagem)
    alert(soma)
}