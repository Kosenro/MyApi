import { Request } from 'express';
import Order from '../database/models/order';

// créer une nouvelle ressource, l'enregistre et la retourne
async function createOrder(req: Request) {
  const order = {
    user_id: req.body.user_id,
    product_id: req.body.product_id,
  };
  const query = await Order.create(order).catch(() => false);

  return query;
}

// met à jour la ressource donnée et la retourne
async function updateOrder(req: Request) {
  const query = await Order.update(req.body, { where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

// supprime la ressource donnée et la retourne
async function deleteOrder(req: Request) {
  const query = await Order.destroy({ where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

export {
  createOrder,
  updateOrder,
  deleteOrder,
};
