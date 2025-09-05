import HttpClient from './utils/HttpClient';

class ContactsServices {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  // Lista todos os contatos
  listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/?orderBy=${orderBy}`);
  }

  // Lista o contato com base no id
  getContactById(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  // Cria um novo contato
  createContacts(contact) {
    return this.httpClient.post('/contacts', { body: contact });
  }

  updateContact(id, contact) {
    return this.httpClient.put(`/contacts/${id}`, { body: contact });
  }
}

export default new ContactsServices();
