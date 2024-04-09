const service = require('./service.js');

async function main() {
  try {
    const result = await service.getPeople('a');
    const names = [];

    console.time('tempo-for');
    for (let i = 0; i <= result.results.length - 1; i++) {
      const person = result.results[i];
      names.push(person.name);
    }
    console.timeEnd('tempo-for');

    console.time('tempo-forin');
    for (let i in result.results) {
      const person = result.results[i];
      names.push(person.name);
    }
    console.timeEnd('tempo-forin');

    console.time('tempo-forof');
    for (person of result.results) {
      names.push(person.name);
    }
    console.timeEnd('tempo-forof');

    console.log(`nomes`, names);
  } catch (error) {
    console.error('DEU RUIM', error);
  }
}

main();
