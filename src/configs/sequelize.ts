import { TodoModel } from '../todos';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  synchronize: true,
  autoLoadModels: true,
  models: [TodoModel],
};
