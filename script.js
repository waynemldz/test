const alunos = ["Wayne", "Isadora", "Gabriel", "Lara"]
const notaUm = [9, 10, 8, 10]
const notaDois = [8, 10, 7, 10]

function media(n1, n2){
    return (n1 + n2)/2
}

function passou(media){
    if(media > 8){
        return "APROVADO"
    }else{
        return "REPROVADO"
    }
}

for (var index in alunos){
    let nomes = alunos[index]
    let notaA = notaUm[index]
    let notaB = notaDois[index]
    const m = media(notaA, notaB)


    console.log("Nome: " + nomes + " - Notas: " + notaA + " e " + notaB + " - Média: "
    + m + " - Status: " +  passou(m))
}

