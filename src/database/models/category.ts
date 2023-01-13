import { DataTypes, Model } from 'sequelize';
import sequelize from '../instance';

interface Category extends Model {
  id : number,
  category_name : string,
  createdAt : string,
  updateAt : string
}

// creation d'un objet
const Categories = sequelize.define('Categories', {
  category_name: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'null',
  },
}, {
  tableName: 'Categories',
});

export default Categories;
