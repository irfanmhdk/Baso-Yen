import produk from "../models/produk-model.mjs";
import fs from "fs";
import path from "path";

// Helper untuk hapus file gambar
const deleteImageFile = (fileName) => {
    if (fileName) {
        const filePath = path.join("./public/images", fileName);
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
};

export const getProduk = async(req, res) => {
    try {
        const response = await produk.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getProdukById = async(req, res) => {
    try {
        const response = await produk.findOne({ where: { id: req.params.id } });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createProduk = async(req, res) => {
    try {
        const { nama, kategori, deskripsi } = req.body;
        const foto = req.file ? req.file.filename : null;

        await produk.create({ nama, kategori, deskripsi, foto });
        res.status(201).json({ msg: "Produk Created" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updProduk = async(req, res) => {
    try {
        const item = await produk.findOne({ where: { id: req.params.id } });
        if (!item) return res.status(404).json({ msg: "Data tidak ditemukan" });

        const { nama, kategori, deskripsi } = req.body;
        let foto = item.foto;

        // Jika user mengunggah foto baru
        if (req.file) {
            deleteImageFile(item.foto);
            foto = req.file.filename;
        }

        await produk.update({ nama, kategori, deskripsi, foto }, {
            where: { id: req.params.id }
        });
        res.status(200).json({ msg: "Produk Updated" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const delProduk = async(req, res) => {
    try {
        const item = await produk.findOne({ where: { id: req.params.id } });
        if (!item) return res.status(404).json({ msg: "Data tidak ditemukan" });

        deleteImageFile(item.foto);
        await produk.destroy({ where: { id: req.params.id } });
        
        res.status(200).json({ msg: "Produk Deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}