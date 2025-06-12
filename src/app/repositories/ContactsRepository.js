const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Gustavo',
    email: 'gustavo@gmail,com',
    phone: '61992765143',
    category: uuid(),
  },
];

class ContacsRepository {
  findAll() {
    return contacts;
  }
}

module.exports = new ContacsRepository();
