const axios = require('axios');
const URL = `https://swapi.dev/api/people`;

async function getPeople(name) {
  const url = `${URL}/?search=${name}&format=json`;
  const response = await axios.get(url);
  return response.data;
}

module.exports = {
  getPeople,
};

// getPeople('r2')
//   .then(function (resultado) {
//     console.log('resultado', resultado);
//   })
//   .catch(function (error) {
//     console.error('DEU RUIM', error);
//   });
