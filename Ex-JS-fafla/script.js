const divConteiner = document.querySelector(".conteiner")

const btns = [
    {
        nome: "soma",
        func: soma
    },
    {
        nome: "subtração",
        func: subtracao
    },
    {
        nome: "divisão",
        func: divisao
    },
    {
        nome: "multiplicação",
        func: multiplicacao
    },
]

function soma (){
    alert("soma")
}
function subtracao (){
alert("subtracao")
}
function divisao (){
alert("divisao")
}
function multiplicacao (){
alert("multiplicacao")
}

btns.forEach((btn) => {
    const btnExercicios = document.createElement("buttom")
    btnExercicios.textContent = btn.nome
    btnExercicios.addEventListener("click", btn.func)

    divConteiner.appendChild(btnExercicios)
})