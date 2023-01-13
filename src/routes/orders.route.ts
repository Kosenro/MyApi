import {
  getAll, getById, create, updateById, deleteById,
} from '../controllers/orders.controller';
import authenticateJWT from '../middlewares/authenticateJWT';

const expressOrders = require('express');

const orders = expressOrders.Router();

orders.get('/', getAll);

orders.get('/:id', getById);

orders.post('/', authenticateJWT, create);

orders.patch('/:id', authenticateJWT, updateById);

orders.delete('/:id', authenticateJWT, deleteById);

export default orders;
