const { getPeople } = require('./service.js');

Array.prototype.myReduce = function (callback, initialValue) {
  let finalValue = typeof initialValue !== undefined ? initialValue : this[0];
  for (let indice = 0; indice <= this.length; indice++) {
    finalValue = callback(finalValue, this[indice], this);
  }
  return finalValue;
};

async function main() {
  try {
    const { results } = await getPeople('a');
    const pesos = results.map((item) => parseInt(item.height));
    console.log('pesos', pesos);

    // const total = pesos.reduce((anterior, proximo) => {
    //   return anterior + proximo;
    // }, 0);

    const myList = [
      ['Diego', 'Zerbini'],
      ['NodeBR', 'Impacta'],
    ];

    const total = myList
      .myReduce((anterior, proximo) => {
        return anterior.concat(proximo);
      }, [])
      .join(',');
    console.log('total', total);
  } catch (error) {
    console.error('DEU RUIM', error);
  }
}

main();
