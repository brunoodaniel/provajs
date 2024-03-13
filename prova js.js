function executaCallBack(funcao){
    funcao()
}

function executando(){
    console.log("Call back executado!")
}

executaCallBack(executando)

//----------------------------------------------------------------------------------------

function timeOut(mensagem){
    setTimeout(() => {console.log(mensagem)}, 4000)
}

timeOut("Mensagem com delay")

//----------------------------------------------------------------------------------------

function imprimindoLinhaPorLinha(parametro){
    for(linha in parametro){
        console.log(linha)
    }
}

let arrayAleatorio = [1, 2, 3, 4, 5]
imprimindoLinhaPorLinha(arrayAleatorio)

//----------------------------------------------------------------------------------------

function funcaoDeExpressao(){
    console.log("Função de expressão")
}

funcaoDeExpressao()

let arrowFunction = () => {console.log("Arrow function")}

arrowFunction()

//----------------------------------------------------------------------------------------

let variavelLet = "\nVariavel let"

const variavelConst = "\nVariavel const"

console.log(variavelLet)
console.log(variavelConst)

variavelLet = "Mudando a variavel let"
console.log(variavelLet)

//(variavelConst = "Mudando a variavel const")   Essa linha não roda porque const não da pra mudar, é uma constante!

//----------------------------------------------------------------------------------------

pessoa = {
    nome: "Bruno",
    dataNascimento: "21/04/2002",
    cpf: "123.456.789-10",
}

aluno = {
    ...pessoa,
    matricula: "0123",
    notas: [1, 2, 3, 4, 5],
    mediaNotas: function(notas){
        let soma
        let cont = 0
        for(nota in notas){
            soma += nota
            cont++
        }
        mediaNotas =  soma / cont
        return mediaNotas
    }
}
console.log(aluno)
