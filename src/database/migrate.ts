import User from './models/user';
import Product from './models/product';
import Order from './models/order';
import Category from './models/category';
import sequelize from './instance';

// connection à la database
async function checkAuthenticate() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    return true;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return false;
  }
}

function migrate() {
  User.sync();
  Product.sync();
  Order.sync();
  Category.sync();
}

if (checkAuthenticate() === Promise.resolve(true)) {
  migrate();
}