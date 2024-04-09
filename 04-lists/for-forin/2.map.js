const service = require('./service.js');

// Como implementar o MAP na mão
Array.prototype.meuMap = function (callback) {
  const newArrayMap = [];
  for (let indice = 0; indice <= this.length - 1; indice++) {
    const resultado = callback(this[indice], indice);
    newArrayMap.push(resultado);
  }
  return newArrayMap;
};

async function main() {
  try {
    const result = await service.getPeople('a');

    // const names = [];
    // console.time('tempo-foreach');
    // result.results.forEach(function (item) {
    //   names.push(item.name);
    // });
    // console.timeEnd('tempo-foreach');

    // console.time('tempo-map');
    // // EXEMPLO COM MAP TRADICIONAL
    // const names = result.results.map(function (person) {
    //   return person.name;
    // });
    // console.timeEnd('tempo-map');

    // EXEMPLO COM MAP ELEGANTE
    // const names = result.results.map((person) => person.name);

    // // Consumindo o MAP implementado na mão, sendo a mesma coisa que o exemplo de cima
    const names = result.results.meuMap(function (person, indice) {
      return person.name;
    });

    console.log('nomes', names);
  } catch (error) {
    console.error('DEU RUIM', error);
  }
}
main();
