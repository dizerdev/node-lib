const { readFile } = require('fs');

const { promisify } = require('util');

const readFileAsync = promisify(readFile);

// outra forma de obter dados do json

// const dataJson = require("./heros.json")

class Database {
  constructor() {
    this.FILE_NAME = 'heros.json';
  }
  async getFileData() {
    const file = await readFileAsync(this.FILE_NAME, 'utf8');
    return JSON.parse(file.toString());
  }

  writeFile() {}

  async list(id) {
    const data = await this.getFileData();
    const filteredData = data.filter((item) => (id ? item.id === id : true));
    return filteredData;
  }
}

module.exports = new Database();
