import { Request, Response } from 'express';
import User from '../database/models/user';
import { createUser, updateUser, deleteUser } from '../services/user.service';

const jwt = require('jsonwebtoken');

const accessTokenSecret = 'Cameronlegoat';

// permet chercher un objet dans la table users en fonction de sont Id
async function getById(req: Request, res: Response) {
  const query = await User.findByPk(req.params.id).catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet chercher tout les objets dans la table users
async function getAll(req: Request, res: Response) {
  const query = await User.findAll().catch(() => {
    res.sendStatus(400);
  });
  res.status(200).send(query);
}

// permet de créer un objet dans la tables users
async function create(req: Request, res: Response) {
  if (!req.body.username) { res.sendStatus(400).send("Username can't be empty"); return; }
  const query = await createUser(req);
  if (query === false) { res.sendStatus(400); } else { res.status(200).send(query); }
}

// permet de metttre à jour un objet en fonction de sont Id dans la table users
async function updateById(req: Request, res: Response) {
  const query = await updateUser(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

//  suprime un objet dans la table users
async function deleteById(req: Request, res: Response) {
  const query = await deleteUser(req);
  if (query === false) { res.sendStatus(400); } else { res.sendStatus(200); }
}

// permet de créer un utilisateur et de l'enregistrer
async function login(req: Request, res: Response) {
  const user : any = await User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  });
  if (user === null) {
    res.sendStatus(400);
    return;
  }
  const accessToken = jwt.sign({ username: user.username }, accessTokenSecret);

  res.json({
    accessToken,
  });
}

export {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  login,
};
