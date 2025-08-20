const prompt = require("prompt-sync")()



let contas = []

for (let i = 0; i < 1 ; i++) {
    console.log(`----- Cadastro ${i+1} ------`)
    let titular = prompt("Digite seu nome: ")
    let agencia = prompt("Digite a agencia: ")
    let account = prompt("Digite sua conta: ")
    let senha = prompt("Digite sua senha: ")
    let saldo = parseFloat(prompt("Saldo inicial: "))

   
    let conta = {
        titular: titular,
        agencia: agencia,
        account: account,
        senha: senha,
        saldo: saldo,
        sacar: function(valor) {
            this.saldo = this.saldo - valor
        },
        depositar: function(valor) {
            this.saldo = this.saldo + valor
        }
    }
    contas.push(conta)
}




let conta = prompt("Digite sua conta: ")
let senha = prompt("Digite sua senha: ")
let indice = autenticar(conta,senha)

if (indice == -1) {
    console.log("Conta ou senha inválida")
} else {
    console.log("Bem vindo")

    console.log("Digite 1 para sacar")
    console.log("Digite 2 para depositar")
    let opcao = parseInt(prompt("Opção: "))

    switch (opcao) {
        case 1:
            let valor = parseFloat(prompt("Digite o valor que quer sacar: "))
            contas[indice].sacar(valor)
            console.log(`Saque realizado com sucesso`)
            console.log(`Saldo atual: R$${contas[indice].saldo} `)
            break;
        
        case 2:
            let deposito = parseFloat(prompt("Digite o valor que quer depositar: "))
            contas[indice].depositar(deposito)
            console.log(`Deposito realizado com sucesso`)
            console.log(`Saldo atual: R$${contas[indice].saldo} `)            
            break;
    
        default:
            break;
    }
}



function autenticar(conta, senha) {

    for (let i =0; i < contas.length; i++) {
         if (contas[i].account == conta) {
            if (contas[i].senha == senha) {
                return i;
            }
         }
    }
    return -1;
}

