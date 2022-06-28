/*Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
Desconto do IR:
Salário Bruto até 900 (inclusive) - isento
Salário Bruto até 1500 (inclusive) - desconto de 5%
Salário Bruto até 2500 (inclusive) - desconto de 10%
Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, */

function folhaDePagamento(){
    let salario = valorHora * horaTrabalhadaMes
    if (salario <= 900){
        ir = 0
        let impostoDeRenda = (salario * ir)/100
        let inss = (salario *10)/100
        let fgts = (salario * 11)/100
        let totalDescontos = impostoDeRenda + inss
        let salarioLiquido = salario - (impostoDeRenda + inss)

        console.log(` Informações sobre a folha de pagamento:\n Salário Bruto: R$${salario}\n (-) IR (${ir}%): R$${impostoDeRenda}\n (-) INSS (10%): R$${inss}\n FGTS (11%): R$${fgts}\n Total de descontos: R$${totalDescontos}\n Salário líquido: R$${salarioLiquido}`)
    }
    else if (salario > 900 && salario <= 1500){
        ir = 5
        let impostoDeRenda = (salario * ir)/100
        let inss = (salario *10)/100
        let fgts = (salario * 11)/100
        let totalDescontos = impostoDeRenda + inss
        let salarioLiquido = salario - (impostoDeRenda + inss)

        console.log(` Informações sobre a folha de pagamento:\n Salário Bruto: R$${salario}\n (-) IR (${ir}%): R$${impostoDeRenda}\n (-) INSS (10%): R$${inss}\n FGTS (11%): R$${fgts}\n Total de descontos: R$${totalDescontos}\n Salário líquido: R$${salarioLiquido}`)
    }
    else if (salario > 1500 && salario <= 2500){
        ir = 10
        let impostoDeRenda = (salario * ir)/100
        let inss = (salario *10)/100
        let fgts = (salario * 11)/100
        let totalDescontos = impostoDeRenda + inss
        let salarioLiquido = salario - (impostoDeRenda + inss)

        console.log(` Informações sobre a folha de pagamento:\n Salário Bruto: R$${salario}\n (-) IR (${ir}%): R$${impostoDeRenda}\n (-) INSS (10%): R$${inss}\n FGTS (11%): R$${fgts}\n Total de descontos: R$${totalDescontos}\n Salário líquido: R$${salarioLiquido}`)
    }
    else if (salario > 2500){
        ir = 20
        let impostoDeRenda = (salario * ir)/100
        let inss = (salario *10)/100
        let fgts = (salario * 11)/100
        let totalDescontos = impostoDeRenda + inss
        let salarioLiquido = salario - (impostoDeRenda + inss)

        console.log(` Informações sobre a folha de pagamento:\n Salário Bruto: R$${salario}\n (-) IR (${ir}%): R$${impostoDeRenda}\n (-) INSS (10%): R$${inss}\n FGTS (11%): R$${fgts}\n Total de descontos: R$${totalDescontos}\n Salário líquido: R$${salarioLiquido}`)
    }

    else{
        console.log('Dados inválidos!')
    }
}

folhaDePagamento(valorHora = 5, horaTrabalhadaMes = '350')

/*
Exemplo de saída:
Informações sobre a folha de pagamento:
 Salário Bruto: R$1750
 (-) IR (10%): R$175
 (-) INSS (10%): R$175
 FGTS (11%): R$192.5
 Total de descontos: R$ 350
 Salário líquido: R$1400 */