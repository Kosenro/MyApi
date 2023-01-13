import {
  getAll, getById, create, updateById, deleteById,
} from '../controllers/users.controller';
import authenticateJWT from '../middlewares/authenticateJWT';

const expressUser = require('express');

const users = expressUser.Router();

users.get('/', getAll);

users.get('/:id', getById);

users.post('/', authenticateJWT, create);

users.patch('/:id', authenticateJWT, updateById);

users.delete('/:id', authenticateJWT, deleteById);

export default users;
