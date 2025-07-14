import delay from '../utils/delay';

class ContactsServices {
  async listContacts(orderBy = 'asc') {
    const response = await fetch(
      `http://localhost:3001/contacts?orderBy=${orderBy}`,
    );

    await delay(500); // Tempo do Loader (teste)

    return response.json();
  }
}

export default new ContactsServices();
