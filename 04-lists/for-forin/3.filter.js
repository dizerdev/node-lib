// Tecnica destructor, para trazer somente o metodo que eu quero
const { getPeople } = require('./service.js');

/*
    const item = {
        nome: "Diego",
        idade: "31",
    }

    const {nome, idade} = item
    console.log(nome, idade)
*/

// Objetivo do filter é trazer da lista somente
// oque é atendido como true NA CONDICAO PASSADA
Array.prototype.myFilter = function (callback) {
  const list = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);
    if (!result) continue;
    list.push(item);
  }
  return list;
};

async function main() {
  try {
    const { results } = await getPeople('a');

    // const familyLars = results.filter(function (item) {
    //   // Por padrão precisa retornar um bool
    //   // para informar se deve manter ou remover da lista
    //   // false > remove da lista
    //   // true > mantem na lista
    //   // não encontrou == -1
    //   // encontrou == posicaoNoArray
    //   // trazer todos com indexOf !== -1
    //   // trazer todos sem indexOf === -1

    //   const result = item.name.toLowerCase().indexOf('lars') !== -1;

    //   return result;
    // });

    const familyLars = results.myFilter((item, index, list) => {
      console.log(`index: ${index}`, list.length);
      // condicao
      return item.name.toLowerCase().indexOf('lars') !== -1;
    });

    const names = familyLars.map((person) => person.name);
    console.log(names);
  } catch (error) {
    console.error('DEU RUIM', error);
  }
}

main();
