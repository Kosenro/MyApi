import { DataTypes, Model } from 'sequelize';
import sequelize from '../instance';

interface Users extends Model {
  id : number,
  username: string,
  password: string,
  createdAt : string,
  updateAt : string
}

// creation d'un objet
const User = sequelize.define('Users', {
  username: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'null',
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'null',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'null',
  }
}, {
  tableName: 'Users',
});

export default User;
