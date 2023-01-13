import { Request, Response } from 'express';
import Order from '../database/models/order';
import { createOrder, updateOrder, deleteOrder } from '../services/order.service';

// permet chercher un objet dans la table orders en fonction de sont Id
async function getById(req: Request, res: Response) {
  const query = await Order.findByPk(req.params.id).catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet chercher tout les objets dans la table orders
async function getAll(req: Request, res: Response) {
  const query = await Order.findAll().catch(() => {
    res.status(400);
  });
  res.status(200).send(query);
}

// permet de créer un objet dans la tables orders
async function create(req: Request, res: Response) {
  if (!req.body.user_id || !req.body.product_id) { res.sendStatus(400); return; }
  const query = await createOrder(req);
  if (query === false) { res.sendStatus(400); } else { res.status(200).send(query); }
}

// permet de metttre à jour un objet en fonction de sont Id dans la table orders
async function updateById(req: Request, res: Response) {
  const query = await updateOrder(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

//  suprime un objet dans la table orders
async function deleteById(req: Request, res: Response) {
  const query = await deleteOrder(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
