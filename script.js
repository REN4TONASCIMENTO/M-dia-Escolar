let nome      = prompt("Digite seu nome:")
    if(nome.length < 5)
        alert("Nome não pode ter menos de 5 caracteres")

let materiaGeografia  = prompt("Digite a materia:")
let notaGeografia     = prompt("Digite a nota:")
    if(notaGeografia <= 0 || notaGeografia > 10) {
        alert("Nota não pode ser menor que 0 ou maior que 10")
}

let materiaIngles  = prompt("Digite a materia:")
let notaIngles     = prompt("Digite a nota:")
    if(notaIngles <= 0 || notaIngles > 10) {
        alert("Nota não pode ser menor que 0 ou maior que 10")
}

let materiaHistoria  = prompt("Digite a materia:")
let notaHistoria     = prompt("Digite a nota:")
    if(notaHistoria <= 0 || notaHistoria > 10) {
        alert("Nota não pode ser menor que 0 ou maior que 10")
}

let presenca  = prompt("Qual a sua presença?")
    if(presenca <= 0) {
        alert("Presença não pode ser menor que 0")
}

let somaNota  = Number(notaGeografia) + Number(notaIngles) + Number(notaHistoria)
let mediaNota = somaNota / 3


if (mediaNota >= 8 && presenca >= 6) {
    alert("A nota do aluno " + nome + " é de " + mediaNota + " e sua presença de " + presenca + ": Aluno aprovado.")
} else 
    alert("A nota do aluno " + nome + " é de " + mediaNota + " e sua presença de " + presenca + ": Aluno reprovado.")