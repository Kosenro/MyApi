import { DataTypes, Model } from 'sequelize';
import sequelize from '../instance';

interface Orders extends Model {
  id : number,
  product_id: number,
  user_id: number,
  createdAt : string,
  updateAt : string
}

// creation d'un objet
const Order = sequelize.define('Order', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'Orders',
});

export default Order;
