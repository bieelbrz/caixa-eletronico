var saldo = 1000;
var numeroConta = 123456;
var senhaCorreta = "3589";

var nome = prompt("Digite o seu nome:");

function exibirSaldo() {
    var senha = prompt("Digite sua senha:");
    if (senha === senhaCorreta) {
        alert(`Seu saldo atual é R$ ${saldo.toFixed(2)}`);
    } else {
        alert("Senha incorreta. Tente novamente.");
        inicio();
    }
}

function exibirExtrato() {
    var extrato = [
        {descricao: "Depósito", valor: 500},
        {descricao: "Compra no mercado", valor: -150},
        {descricao: "Transfêrencia recebida", valor: 200}
    ];

    var extratoTexto = "Extrato:\n";
    for (const movimento of extrato) {
        extratoTexto += `${movimento.descricao}: R$ ${movimento.valor.toFixed(2)}\n`;
    }

    alert(extratoTexto);

}

function sacar(valor) {
    if (valor <= 0) {
        alert("Operação não autorizada. O valor deve ser maior que zero.");
    } else if(valor > saldo) {
        alert("Operação não autorizada. Saldo insuficiente.");
    } else {
        saldo -= valor;
        alert(`Saque realizado com sucesso! Novo saldo: R$ ${saldo.toFixed(2)}`);
    }
}

function depositar(valor, numeroContaDestino) {
    if(valor <= 0) {
        alert("Operação não autorizada. O valor deve ser maior que zero.");
    } else if (valor > saldo) {
        alert("Operação não autorizada. Saldo insuficiente.");
    } else {
        saldo += valor;
        alert(`Transferência realizada com sucesso para a conta ${numeroContaDestino}.Novo saldo: R$ ${saldo.toFixed(2)}`);
    }
}

function transferir(valor, numeroContaDestino) {
    if(valor <= 0) {
        alert("Operação não autorizada. O valor deve ser maior que zero.");
    } else if (valor > saldo) {
        alert("Operação não autorizada. Saldo insuficiente.");
    } else {
        saldo -= valor;
        alert(`Transfêrencia realizada com sucesso para a conta ${numeroContaDestino}. Novo saldo: R$ ${saldo.toFixed(2)}`);
    }
}

function inicio(){
    var opcao = prompt("Escolha uma opção:\n1. Saldo\n2. Extrato\n3. Sacar\n4. Depositar\n5. Transfêrencia\n6. Sair");

    switch (opcao) {
        case "1":
            exibirSaldo();
            inicio();
            break;
        case "2":
            exibirExtrato();
            inicio();
            break;
        case "3":
            var valorSaque = parseFloat(prompt("Digite o valor para saque:"));
            sacar(valorSaque);
            inicio();
            break;
        case "4":
            var valorDeposito = parseFloat(prompt("Digite o valor para depósito:"));
            depositar(valorDeposito);
            inicio();
            break;
        case "5":
            var valorTransferencia = parseFloat(prompt("Digite o valor para transfêrencia"));
            var contaDestino = parseInt(prompt("Digite o número da conta de destino:"));
            transferir(valorTransferencia, contaDestino);
            inicio();
            break;
        case "6":
            alert(`Obrigado por usar nossos serviços, {Nome}! Foi um prazer ter você por aqui.`);
            inicio();
            break;
        default:
            alert("Opção inválida. Tente novamente.");
            inicio();
    }
}

inicio();