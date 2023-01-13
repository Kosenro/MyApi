import { Request, Response } from 'express';
import Product from '../database/models/product';
import { createProduct, updateProduct, deleteProduct } from '../services/product.service';

// permet chercher un objet dans la table products en fonction de sont Id
async function getById(req: Request, res: Response) {
  const query = await Product.findByPk(req.params.id).catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet chercher tout les objets dans la table products
async function getAll(req: Request, res: Response) {
  const query = await Product.findAll().catch(() => {
    res.sendStatus(400);
  });
  res.send(query);
}

// permet de créer un objet dans la tables products
async function create(req: Request, res: Response) {
  if (!req.body.product_name) { res.sendStatus(400); return; }
  const query = await createProduct(req);
  if (query === false) { res.sendStatus(400); } else { res.status(200).send(query); }
}

// permet de metttre à jour un objet en fonction de sont Id dans la table products
async function updateById(req: Request, res: Response) {
  const query = await updateProduct(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

//  suprime un objet dans la table products
async function deleteById(req: Request, res: Response) {
  const query = await deleteProduct(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
