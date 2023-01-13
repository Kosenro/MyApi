import {
  getAll, getById, create, updateById, deleteById,
} from '../controllers/products.controller';
import authenticateJWT from '../middlewares/authenticateJWT';

const expressProduct = require('express');

const products = expressProduct.Router();

products.get('/', getAll);

products.get('/:id', getById);

products.post('/', authenticateJWT, create);

products.patch('/:id', authenticateJWT, updateById);

products.delete('/:id', authenticateJWT, deleteById);

export default products;
