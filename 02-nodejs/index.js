/*
 0 Obter um usuario
 1 Obter o numero de telefone de um usuario a partir de seu Id
 2 Obter o endereco do usuario pelo Id
*/

/*// ------------ TRABALHANDO COM CALLBACKS ------------

function getUser(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      name: 'Diego',
      bornDate: new Date(),
    });
  }, 1000);
}

function getPhone(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      phone: '986921165',
      ddd: '11',
    });
  }, 2000);
}

function getAdress(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      adress: 'Rua dos bobos',
      number: 0,
    });
  }, 2000);
}

// ---- Evocando as funções usando as callbacks aninhadas ----

getUser(function resolveUser(error, user) {
  // null || "" || 0 === false
  if (error) {
    console.error('DEU RUIM em USUARIO', error);
    return;
  }

  getPhone(user.id, function resolvePhone(error1, phone) {
    if (error) {
      console.error('DEU RUIM em TELEFONE', error);
      return;
    }

    getAdress(user.id, function resolveAdress(error2, adress) {
      if (error) {
        console.error('DEU RUIM em ENDERECO', error);
        return;
      }
      console.log(`
        Nome: ${user.name},
        Endereco: ${adress.adress}, ${adress.number},
        Telefone: (${phone.ddd})${phone.phone}
        `);
    });
  });
});
*/

/*// ------------ TRABALHANDO COM PROMISSES ------------

// importamos um modulo interno do node.js
const util = require('util');
const getAdressAsync = util.promisify(getAdress);

function getUser() {
  // Quando der algum problema -> reject(ERRO)
  // Quando der tudo certo -> resolve
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      // return reject(new Error('DEU RUIM DE VERDADE'));

      // exemplo para simular o tempod e uma requisição
      return resolve({
        id: 1,
        name: 'Diego',
        bornDate: new Date(),
      });
    }, 1000);
  });
}

function getPhone(idUser) {
  // Tratando a função como se fosse uma promise
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        phone: '986921165',
        ddd: '11',
      });
    }, 2000);
  });
}

function getAdress(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      adress: 'Rua dos bobos',
      number: 0,
    });
  }, 2000);
}

const userPromisse = getUser();
// para manipular o sucesso, usar a função .then()
// para manipular o erro, usar a função .catch()
// sempre joga o resultado do .then() anterior, no parametro retornado
userPromisse
  .then(
    // Função de captura da função de inicio da cadeia .then()
    function (user) {
      return getPhone(user.id).then(function resolvePhone(result) {
        return {
          usuario: {
            nome: user.name,
            id: user.id,
          },
          telefone: result,
        };
      });
    }
  )
  .then(
    // Função para receber o resultado da anterior e adicionar mais uma encapsulada
    function (resultado) {
      const adress = getAdressAsync(resultado.usuario.id);
      return adress.then(function resolveAdress(result) {
        return {
          usuario: resultado.usuario,
          telefone: resultado.telefone,
          //
          endereco: result,
        };
      });
    }
  )
  .then(
    // função para modelar os dados e entregar ao usuario
    function (resultado) {
      console.log(`
      nome: ${resultado.usuario.nome},
      endereco: ${resultado.endereco.adress},${resultado.endereco.number},
      telefone:${resultado.telefone.phone}
    `);
    }
  )
  .catch(function (error) {
    console.error('DEU RUIM', error);
  });
  */

/*// ------------ TRABALHANDO COM ASYNC/AWAIT ------------

const util = require('util');
const getAdressAsync = util.promisify(getAdress);

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: 'Diego',
        bornDate: new Date(),
      });
    }, 1000);
  });
}

function getPhone(idUser) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        phone: '986921165',
        ddd: '11',
      });
    }, 2000);
  });
}

function getAdress(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      adress: 'Rua dos bobos',
      number: 0,
    });
  }, 2000);
}

// 1o passo: adicionar a palavra async -> automaticamente retorna uma Promise
main();
async function main() {
  try {
    console.time('medida-promise');
    const usuario = await getUser();
    // const telefone = await getPhone(usuario.id);
    // const endereco = await getAdressAsync(usuario.id);
    const resultado = await Promise.all([
      getPhone(usuario.id),
      getAdressAsync(usuario.id),
    ]);
    console.log(resultado);
    const endereco = resultado[1];
    const telefone = resultado[0];
    console.log(`
      Nome: ${usuario.name},
      Endereco: ${endereco.adress},${endereco.number},
      Telefone: (${telefone.ddd})${telefone.phone},
    `);
    console.timeEnd('medida-promise');
  } catch (error) {
    console.error('DEU RUIM', error);
  }
}
*/
