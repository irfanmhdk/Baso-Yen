import { Sequelize } from "sequelize";
import db from "../config/database.mjs";

const {DataTypes} = Sequelize;

const produk = db.define('produk',{
    nama: DataTypes.STRING,
    kategori: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    foto: DataTypes.STRING
},{
    freezeTableName:true
});

export default produk;