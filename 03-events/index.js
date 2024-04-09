const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
const nameEvent = 'usuario:click';
myEmitter.on(nameEvent, function (click) {
  console.log('Um usuario clicou', click);
});
// // Prestando atenção o evento
// myEmitter.emit(nameEvent, 'na barra de rolagem');
// myEmitter.emit(nameEvent, 'no ok');
// let count = 0;
// // Como escutar o evento
// setInterval(function () {
//   myEmitter.emit(nameEvent, 'no ok ' + count++);
// }, 1000);

const stdin = process.openStdin();
function main() {
  return new Promise(function (resolve, reject) {
    stdin.addListener('data', function (value) {
      // console.log(`Voce digitou: ${value.toString().trim()}`);
      return resolve(value);
    });
  });
}

main().then(function (resultado) {
  console.log('resultado', resultado.toString());
});
