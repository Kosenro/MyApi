import { login } from '../controllers/users.controller';

const expressAuth = require('express');

const auth = expressAuth.Router();

auth.post('/', login);

export default auth;
