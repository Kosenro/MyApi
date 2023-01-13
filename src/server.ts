import user from './routes/users.route';
import product from './routes/products.route';
import order from './routes/orders.route';
import categories from './routes/categories.route';
import register from './routes/register.route';
import auth from './routes/auth.route';

const express = require('express');
var cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use('/user', user);
app.use('/product', product);
app.use('/order', order);
app.use('/category', categories);
app.use('/auth', auth);
app.use('/register', register);

app.post('/', (req : any, res : any) => {
  res.send('I am a POST request');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
