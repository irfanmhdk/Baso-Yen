import express from "express";
import cors from "cors";
import { db } from "./models/models-control.mjs";

// IMPORT ROUTER
import UserRouter from "./routes/user-route.mjs";
import ProdukRouter from "./routes/produk-route.mjs";
import ResepRouter from "./routes/resep-route.mjs";

const app = express();
app.use(cors());
app.use(express.json());

// ROUTER
app.use(express.static('public'));
app.use(UserRouter);
app.use(ResepRouter);
app.use(ProdukRouter);

// SINKRONISASI DATABASE
(async () => {
    try {
        await db.sync({ alter: true });
        console.log(' Database & seluruh tabel berhasil disinkronkan...');
    } catch (error) {
        console.error('Gagal sinkronisasi database:', error.message);
    }
})();

app.listen(4000, ()=> console.log(' Server up and running...'));