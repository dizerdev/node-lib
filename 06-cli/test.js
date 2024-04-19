const { deepEqual, ok } = require('assert');

const database = require('./database');

const DEFAULT_ITEM_CADASTRAR = {
  name: 'Flash',
  skill: 'Speed',
  id: 1,
};

describe('Suite de manipulação de Herois', () => {
  it('deve pesquisar um heroi, usando arquivos', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [result] = await database.list(expected.id);
    // const firstPosition = result[0];
    deepEqual(result, expected);
    // ok(result, expected);
  });
});
