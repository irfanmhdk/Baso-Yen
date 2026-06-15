import { Sequelize } from "sequelize";

const db = new Sequelize("yen_db", "root", "mahar1416",{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;