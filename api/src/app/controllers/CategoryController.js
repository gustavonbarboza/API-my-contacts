const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoryRepository.findAll();
    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoryRepository.findById(id);

    // 404: Not Found
    if (!category) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await CategoryRepository.findByName(name);
    if (contactExists) {
      return response.status(400).json({ error: 'This name is already in use' });
    }

    const category = await CategoryRepository.create({ name });

    response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const contactExists = await CategoryRepository.findById(id);
    if (!contactExists) {
      return response.status(400).json({ error: 'User not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactByName = await CategoryRepository.findByName(name);
    if (contactByName && contactByName.id !== id) {
      return response.status(400).json({ error: 'This name is already in use' });
    }

    const categories = await CategoryRepository.update(id, { name });

    response.json(categories);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoryRepository.delete(id);
    // 204: Not Content
    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
