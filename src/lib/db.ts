import knex from "knex";
import knexConfig from "../../knexfile.js";

const dbConfig = knexConfig[process.env.NODE_ENV ?? "development"];

export const db = knex(dbConfig);
