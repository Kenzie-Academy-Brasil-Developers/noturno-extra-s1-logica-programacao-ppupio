// Seu código vem aqui

function calculateSalary(Vendas,salario){
    let comissao1=0.03;
    let comissao2=0.05;
    let comissao
    if (Vendas>1200){
        comissao=comissao1*1200+comissao2*(Vendas-1200);
    }
    else {
        comissao=comissao1*Vendas;
    }
    return salario+comissao;
}

function calculateStock (atual,max,min) {
    let media = (max+min)/2;
    if (atual>=media){
        return "Não efetuar compra";
    }
    else {
        return "Efetuar compra";
    }

}


function calculateAge (anoN,anoA){
    let anos=anoA-anoN;
    let meses=(anoA-anoN)*12;
    let dias=(anoA-anoN)*365;
    let semanas=(anoA-anoN)*52;
    return anos + " anos , ou " + meses + " meses, ou " + dias + " dias, ou " + semanas + " semanas"
}


function getDiagonal (NxN){
    let arr=[];
    for (let indice=0; indice<NxN.length; indice++){
        arr.push(NxN[indice][indice])
    }
    return arr;
}


function cashMachine (saque){
    let n100 = (saque-saque%100)/100
    let n50  = (saque%100-(saque%100)%50)/50
    let n20  = ((saque%100)%50-((saque%100)%50)%20)/20
    let n10  = (((saque%100)%50)%20-(((saque%100)%50)%20)%10)/10
    let n2   = ((((saque%100)%50)%20)%10-((((saque%100)%50)%20)%10)%2)/2
    let n1   = (((((saque%100)%50)%20)%10)%2-(((((saque%100)%50)%20)%10)%2)%1)/1
    return `${n100} notas de 100, ${n50} notas de 50, ${n20} notas de 20, ${n10} notas de 10, ${n2} notas de 2, ${n1} notas de 1`
}