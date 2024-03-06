const idade = document.querySelector('.idade');
var dataAtual = new Date();

var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1;
var ano = dataAtual.getFullYear();

const diaAniversario = 14;
const mesAniversario = 7;
const anoAniversario = 2000;

if(dia >= diaAniversario && mes >= mesAniversario ) {
  const aniversario = ano - anoAniversario
  idade.innerText = aniversario 
  console.log(aniversario);
}else {
  const aniversario = ano - anoAniversario - 1
  idade.innerText = aniversario 
  console.log(aniversario);
}

