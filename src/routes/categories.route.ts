import {
  getAll, getById, create, updateById, deleteById,
} from '../controllers/categories.controller';
import authenticateJWT from '../middlewares/authenticateJWT';

const expressCategory = require('express');

const category = expressCategory.Router();

category.get('/', getAll);

category.get('/:id', getById);

category.post('/', authenticateJWT, create);

category.patch('/:id', authenticateJWT, updateById);

category.delete('/:id', authenticateJWT, deleteById);

export default category;
