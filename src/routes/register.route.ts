import {
  create,
} from '../controllers/users.controller';

const expressRegister = require('express');

const register = expressRegister.Router();

register.post('/', create);

export default register;
