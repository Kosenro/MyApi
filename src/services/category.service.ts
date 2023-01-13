import { Request } from 'express';
import Category from '../database/models/category';

// créer une nouvelle ressource, l'enregistre et la retourne
async function createCategory(req: Request) {
  const category = {
    category_name: req.body.category_name,
  };
  const query = await Category.create(category).catch(() => false);

  return query;
}

// met à jour la ressource donnée et la retourne
async function updateCategory(req: Request) {
  const query = await Category.update(req.body, { where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

// supprime la ressource donnée et la retourne
async function deleteCategory(req: Request) {
  const query = await Category.destroy({ where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

export {
  createCategory,
  updateCategory,
  deleteCategory,
};
