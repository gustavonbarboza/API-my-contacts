import HttpClient from './utils/HttpClient';

class ContactsServices {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/91f65160-e81e-4f53-a963-514fc4fe6ce6?orderBy=${orderBy}`);
  }

  async createContacts(contact) {
    return this.httpClient.post('/contacts', contact);
  }
}

export default new ContactsServices();
