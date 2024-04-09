// Considere uma lista de números inteiros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1_ Usando um loop for, itere sobre a lista e imprima apenas os números pares.

for (let item = 0; item <= list.length; item++) {
  if (list[item] % 2 !== 0) {
    console.log('Item par', item);
  }
}

console.log('-------------------------------------------');
// 2_ Usando um loop for...in, itere sobre a lista e calcule a soma de todos os números.

let soma = 0;
for (item in list) {
  soma = Number(item) + soma;
  console.log(item, '+', soma, '=', soma + Number(item));
}

// 3_ Usando um loop for...of, itere sobre a lista e verifique se algum número é maior que 5. Imprima "Existe um número maior que 5" se a condição for verdadeira, caso contrário, imprima "Não existe um número maior que 5".

// 4_ Usando o método map, crie uma nova lista que contenha o quadrado de cada número da lista original.

// 5_ Usando o método filter, crie uma nova lista que contenha apenas os números divisíveis por 3.

// 6_ Usando o método reduce, calcule a soma de todos os números da lista original.

// Responda às perguntas acima no formato de código JavaScript, escrevendo o código correspondente para cada uma das etapas mencionadas.
// )
