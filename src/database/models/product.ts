import { DataTypes, Model } from 'sequelize';
import sequelize from '../instance';

interface Products extends Model {
  id : number,
  product_name: string,
  price: number,
  description: string,
  category: number,
  provider: string;
  createdAt : string,
  updateAt : string
}

// creation d'un objet
const Product = sequelize.define('Product', {
  product_name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'null',
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'null',
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'null',
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: true,
    comment: 'null',
  },
  provider: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'null',
  },
}, {
  tableName: 'Products',
});

export default Product;
