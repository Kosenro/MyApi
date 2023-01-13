import { Request } from 'express';
import Product from '../database/models/product';

// créer une nouvelle ressource, l'enregistre et la retourne
async function createProduct(req: Request) {
  const product = {
    product_name: req.body.product_name,
    category: req.body.category,
    price: req.body.price,
    description: req.body.description,
    provider: req.body.provider,
  };

  const query = await Product.create(product).catch(() => false);

  return query;
}

// met à jour la ressource donnée et la retourne
async function updateProduct(req: Request) {
  const query = await Product.update(req.body, { where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

// supprime la ressource donnée et la retourne
async function deleteProduct(req: Request) {
  const query = await Product.destroy({ where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

export {
  createProduct,
  updateProduct,
  deleteProduct,
};
