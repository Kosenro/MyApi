import { Request } from 'express';
import User from '../database/models/user';

async function createUser(req: Request) {
  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };
  const query = await User.create(user).catch(() => false);

  return query;
}
async function updateUser(req: Request) {
  const query = await User.update(req.body, { where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

// supprime la ressource donnée et la retourne
async function deleteUser(req: Request) {
  const query = await User.destroy({ where: { id: req.params.id } })
    .catch(() => false);
  return query;
}

export {
  createUser,
  updateUser,
  deleteUser,
};
