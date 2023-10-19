import { DataSource, DataSourceOptions } from 'typeorm';
import { VALLENTUNA_SURVEY_BACKEND_SSL_MODE } from './core/constants/environment.const';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  // host: 'localhost',
  host: '',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'survey-dev',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  // migrations: [
  //   CreateUser1557166726050,
  //   CreateProfile1570141220019,
  //   CreateSessionStorage1584985637890,
  //   CreateTodo1597106889894,
  // ],
  migrationsRun: false,
  synchronize: true,
  extra: {
    ssl:
      VALLENTUNA_SURVEY_BACKEND_SSL_MODE === 'require'
        ? {
          rejectUnauthorized: false,
        }
        : false,
  },
};

export const appDataSource = new DataSource(dataSourceOptions);
