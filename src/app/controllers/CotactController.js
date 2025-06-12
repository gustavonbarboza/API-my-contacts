const ContactsRepository = require('../repositories/ContactsRepository');

class ContacController {
  // Listar todos os registros
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  // Obter um registro
  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    // 404: Not Found
    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  // Criar novo registro
  store() {
  }

  // Editar um registro
  update() {
  }

  // Deletar um registro
  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    // 404: Not Found
    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);
    // 204: Not Content
    response.sendStatus(204);
  }
}

module.exports = new ContacController();
