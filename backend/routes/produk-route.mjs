import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { 
    getProduk,
    getProdukById,
    createProduk,
    updProduk,
    delProduk
} from "../controllers/produk-controller.mjs";

const ProdukRouter = express.Router();

// Konfigurasi Penyimpanan Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "./public/images";

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        // Format nama file: timestamp-namaasli.ext
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb(new Error("Hanya diperbolehkan mengunggah file gambar (jpg, jpeg, png, webp)!"));
    }
};

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // Batasan file maks 2MB
    fileFilter: fileFilter
});

ProdukRouter.get('/produk', getProduk);
ProdukRouter.get('/produk/:id', getProdukById);
ProdukRouter.post('/produk', upload.single('foto'), createProduk);
ProdukRouter.patch('/produk/:id', upload.single('foto'), updProduk);
ProdukRouter.delete('/produk/:id', delProduk);

export default ProdukRouter;