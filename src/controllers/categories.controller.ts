import { Request, Response } from 'express';
import Category from '../database/models/category';
import { createCategory, updateCategory, deleteCategory } from '../services/category.service';

// permet chercher un objet dans la table category en fonction de sont Id
async function getById(req: Request, res: Response) {
  const query = await Category.findByPk(req.params.id).catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet chercher tout les objets dans la table category
async function getAll(req: Request, res: Response) {
  const query = await Category.findAll().catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet de créer un objet dans la tables category
async function create(req: Request, res: Response) {
  if (!req.body.category_name) { res.sendStatus(400); return; }
  const query = await createCategory(req);
  if (query === false) { res.sendStatus(400); } else { res.status(200).send(query); }
}

// permet de metttre à jour un objet en fonction de sont Id dans la table category
async function updateById(req: Request, res: Response) {
  const query = await updateCategory(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

//  suprime un objet dans la table category
async function deleteById(req: Request, res: Response) {
  const query = await deleteCategory(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
