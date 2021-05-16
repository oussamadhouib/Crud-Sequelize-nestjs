import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SequelizeToken',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'users',
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];