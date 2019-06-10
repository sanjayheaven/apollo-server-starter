import { ProjectConfig } from './type'
import { Sequelize } from 'sequelize-typescript'
import * as utils from './src/utils'
import { models } from './db'

export interface Dictionary<T> {
  [index: string]: T;
}

export interface NumericDictionary<T> {
  [index: number]: T;
}

export type Many<T> = T | Readonly<T[]>;

export type Models = typeof models

export interface ProjectConfig {
  salt: string
}

export type AppConfig = {
  pg: {
    dialect: string,
    port: string,
    host: string,
    username: string
  }
} & ProjectConfig

export interface AppContext {
  sequelize: Sequelize,
  models: Models,
  config: AppConfig,
  utils: typeof utils
}
