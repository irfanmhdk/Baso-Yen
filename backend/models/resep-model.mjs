import { Sequelize } from "sequelize";
import db from "../config/database.mjs";

const {DataTypes} = Sequelize;

const resep = db.define('resep',{
    nama: DataTypes.STRING,
    kategori: DataTypes.STRING,
    desc: DataTypes.TEXT,
    bahan: DataTypes.TEXT,
    cara: DataTypes.TEXT,
    foto: DataTypes.STRING
},{
    freezeTableName:true
});

export default resep;